#!/usr/bin/env node
import fs from "fs"
import path from "path"
import crypto from "crypto"

const IMAGE_DIR = path.join(process.cwd(), "image proudct")
const PUBLIC_PRODUCTS_DIR = path.join(process.cwd(), "public", "products")
const PRODUCTS_FILE = path.join(process.cwd(), "src", "lib", "data", "products.ts")
const CATEGORIES_FILE = path.join(process.cwd(), "src", "lib", "data", "categories.ts")

const CATEGORY_IDS = [
  "cat-women",
  "cat-men",
  "cat-home",
  "cat-cars",
  "cat-electronics",
  "cat-sports",
  "cat-kids",
]

const VISION_PROMPT = `Analyze this product image. Return ONLY valid JSON, no markdown:

{
  "name": "Product name in English (concise, descriptive)",
  "nameAr": "اسم المنتج بالعربية (دقيق وموجز)",
  "description": "Product description in English (2 sentences, highlight value)",
  "descriptionAr": "وصف المنتج بالعربية (جملتين، أبرز القيمة والفوائد)",
  "price": 999,
  "originalPrice": 1499,
  "category": "cat-electronics",
  "tags": ["tag1", "tag2"],
  "features": ["feature in Arabic", "feature in Arabic", "feature in Arabic", "feature in Arabic"],
  "specifications": { "المادة": "بلاستيك", "الوزن": "200g" }
}

Rules:
- price: realistic MAD price for Moroccan market (whole number)
- originalPrice: higher than price, or same if no discount (null if no discount)
- category: pick from [cat-women, cat-men, cat-home, cat-cars, cat-electronics, cat-sports, cat-kids]
- tags: 2-4 short Arabic keywords
- features: 3-4 key selling points in Arabic
- specifications: 2-4 key specs as key-value pairs in Arabic
- If product is clothing/fashion → cat-women or cat-men
- If product is kitchen/home item → cat-home
- If product is car accessory → cat-cars
- If product is electronic/gadget → cat-electronics
- If product is sports/fitness → cat-sports
- If product is kids/baby/toy → cat-kids

IMPORTANT: Return ONLY the JSON object, no explanation.`

interface VisionResult {
  name: string
  nameAr: string
  description: string
  descriptionAr: string
  price: number
  originalPrice: number | null
  category: string
  tags: string[]
  features: string[]
  specifications: Record<string, string>
}

interface ImportProduct {
  id: string
  slug: string
  name: string
  nameAr: string
  description: string
  descriptionAr: string
  price: number
  originalPrice: number | null
  discount: number | null
  images: string[]
  category: string
  tags: string[]
  rating: number
  reviewCount: number
  isNew: boolean
  isBestSeller: boolean
  isTrending: boolean
  features: string[]
  specifications: Record<string, string>
  inStock: boolean
  codAvailable: boolean
}

function imageToBase64(filePath: string): string {
  const buffer = fs.readFileSync(filePath)
  const ext = path.extname(filePath).toLowerCase().replace(".", "")
  const mime = ext === "png" ? "image/png" : ext === "webp" ? "image/webp" : "image/jpeg"
  return `data:${mime};base64,${buffer.toString("base64")}`
}

function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60)
}

function generateArabicSlug(text: string): string {
  return text
    .replace(/\s+/g, "-")
    .replace(/[^\u0600-\u06FF0-9a-zA-Z-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60)
}

function sanitizeJSON(raw: string): string {
  let json = raw.trim()
  json = json.replace(/^```(?:json)?\s*\n?/, "")
  json = json.replace(/\n?```\s*$/, "")
  const firstBrace = json.indexOf("{")
  const lastBrace = json.lastIndexOf("}")
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    json = json.slice(firstBrace, lastBrace + 1)
  }
  return json
}

async function analyzeImage(base64Image: string, apiKey: string, index: number): Promise<VisionResult> {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: VISION_PROMPT },
            { type: "image_url", image_url: { url: base64Image, detail: "low" } },
          ],
        },
      ],
      max_tokens: 600,
      temperature: 0.2,
    }),
  })

  if (!response.ok) {
    const err = await response.text()
    throw new Error(`OpenAI API error (${response.status}): ${err.slice(0, 200)}`)
  }

  const data = await response.json()
  const content = data.choices[0]?.message?.content

  if (!content) throw new Error("Empty response from API")

  try {
    const json = sanitizeJSON(content)
    const parsed = JSON.parse(json) as VisionResult
    return validate(parsed, index)
  } catch (err) {
    console.error(`\n✗ Failed to parse JSON for image ${index + 1}:`)
    console.error(`  Raw: ${content.slice(0, 200)}`)
    throw err
  }
}

function validate(result: VisionResult, index: number): VisionResult {
  if (!result.name || typeof result.name !== "string") {
    result.name = `Product ${index + 1}`
  }
  if (!result.nameAr || typeof result.nameAr !== "string") {
    result.nameAr = `منتوج ${index + 1}`
  }
  if (!result.description || typeof result.description !== "string") {
    result.description = "High-quality product available at the best price."
  }
  if (!result.descriptionAr || typeof result.descriptionAr !== "string") {
    result.descriptionAr = "منتوج عالي الجودة متوفر بأفضل الأسعار مع التوصيل لجميع المدن المغربية."
  }
  if (typeof result.price !== "number" || result.price <= 0) {
    result.price = 199
  }
  if (result.originalPrice !== null && (typeof result.originalPrice !== "number" || result.originalPrice <= result.price)) {
    result.originalPrice = null
  }
  if (!CATEGORY_IDS.includes(result.category)) {
    result.category = "cat-electronics"
  }
  if (!Array.isArray(result.tags)) result.tags = []
  if (!Array.isArray(result.features)) result.features = []
  if (!result.specifications || typeof result.specifications !== "object") {
    result.specifications = {}
  }
  return result
}

function createProduct(result: VisionResult, imageFilename: string, index: number): ImportProduct {
  const slug = generateSlug(result.name) || generateArabicSlug(result.nameAr) || `product-${index + 1}`
  const discount = result.originalPrice
    ? Math.round(((result.originalPrice - result.price) / result.originalPrice) * 100)
    : null

  return {
    id: `import-${String(index + 1).padStart(3, "0")}`,
    slug,
    name: result.name,
    nameAr: result.nameAr,
    description: result.description,
    descriptionAr: result.descriptionAr,
    price: result.price,
    originalPrice: result.originalPrice,
    discount,
    images: [`/products/${imageFilename}`],
    category: result.category,
    tags: result.tags,
    rating: 5.0,
    reviewCount: 0,
    isNew: true,
    isBestSeller: false,
    isTrending: true,
    features: result.features,
    specifications: result.specifications,
    inStock: true,
    codAvailable: true,
  }
}

function printPreview(products: ImportProduct[]): void {
  console.log(`\n${"═".repeat(100)}`)
  console.log(`📋 PREVIEW — ${products.length} Products Detected`)
  console.log(`${"═".repeat(100)}\n`)

  for (let i = 0; i < products.length; i++) {
    const p = products[i]
    const disc = p.discount ? ` (-${p.discount}%)` : ""
    console.log(
      `${String(i + 1).padStart(2)}. ${p.nameAr.padEnd(40)} │ ${p.category.padEnd(16)} │ ${p.price} MAD${disc}`,
    )
  }
}

function copyImages(products: ImportProduct[], imageDir: string): void {
  if (!fs.existsSync(PUBLIC_PRODUCTS_DIR)) {
    fs.mkdirSync(PUBLIC_PRODUCTS_DIR, { recursive: true })
  }

  for (const product of products) {
    const originalFilename = product.images[0].replace("/products/", "")
    const srcPath = path.join(imageDir, originalFilename)
    const ext = path.extname(originalFilename)
    const newName = `${product.slug}${ext}`
    const destPath = path.join(PUBLIC_PRODUCTS_DIR, newName)

    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath)
      product.images = [`/products/${newName}`]
    }
  }
}

function insertProducts(products: ImportProduct[]): void {
  if (!fs.existsSync(PRODUCTS_FILE)) {
    console.error(`✗ Products file not found: ${PRODUCTS_FILE}`)
    return
  }

  let content = fs.readFileSync(PRODUCTS_FILE, "utf-8")

  if (content.includes(`id: "import-001"`)) {
    console.error("✗ Imported products already exist in the database. Remove them first or use new IDs.")
    return
  }

  const entries = products.map((p) => {
    const specs = Object.entries(p.specifications)
      .map(([k, v]) => `"${k.replace(/"/g, '\\"')}": "${v.replace(/"/g, '\\"')}"`)
      .join(", ")

    return `  {
    id: "${p.id}",
    slug: "${p.slug}",
    name: "${p.name.replace(/"/g, '\\"')}",
    nameAr: "${p.nameAr.replace(/"/g, '\\"')}",
    description: "${p.description.replace(/"/g, '\\"')}",
    descriptionAr: "${p.descriptionAr.replace(/"/g, '\\"')}",
    price: ${p.price},
    originalPrice: ${p.originalPrice ?? "null"},
    discount: ${p.discount ?? "null"},
    images: ["${p.images[0]}"],
    category: "${p.category}",
    tags: [${p.tags.map((t) => `"${t}"`).join(", ")}],
    rating: ${p.rating},
    reviewCount: ${p.reviewCount},
    isNew: ${p.isNew},
    isBestSeller: ${p.isBestSeller},
    isTrending: ${p.isTrending},
    features: [${p.features.map((f) => `"${f.replace(/"/g, '\\"')}"`).join(", ")}],
    specifications: { ${specs} },
    inStock: true,
    codAvailable: true,
  }`
  })

  const insertionBlock = `\n  // --- 📸 Image Imported Products ---\n${entries.join(",\n")},\n`

  const insertAt = content.indexOf("];")
  if (insertAt === -1) {
    console.error("✗ Could not find insertion point in products.ts")
    return
  }

  content = content.slice(0, insertAt) + insertionBlock + content.slice(insertAt)

  const backupPath = PRODUCTS_FILE.replace(".ts", `.backup-${Date.now()}.ts`)
  fs.copyFileSync(PRODUCTS_FILE, backupPath)
  console.log(`\n✓ Backup saved: ${path.basename(backupPath)}`)

  fs.writeFileSync(PRODUCTS_FILE, content, "utf-8")
  console.log(`✓ Inserted ${products.length} products into ${path.basename(PRODUCTS_FILE)}`)
}

async function main(): Promise<void> {
  console.log(`\n╔══════════════════════════════════════════════╗`)
  console.log(`║   📸 Mira Mall — Image Product Importer     ║`)
  console.log(`║   استيراد المنتوجات من التصاور               ║`)
  console.log(`╚══════════════════════════════════════════════╝\n`)

  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    console.error("✗ OPENAI_API_KEY not set. Run with: OPENAI_API_KEY=sk-... npx tsx scripts/image-import.ts")
    process.exit(1)
  }

  if (!fs.existsSync(IMAGE_DIR)) {
    console.error(`✗ Image directory not found: ${IMAGE_DIR}`)
    process.exit(1)
  }

  const imageFiles = fs
    .readdirSync(IMAGE_DIR)
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .filter((f) => !f.startsWith("."))
    .sort()

  if (imageFiles.length === 0) {
    console.error("✗ No images found in image proudct/")
    process.exit(1)
  }

  console.log(`📁 Found ${imageFiles.length} images\n`)

  const products: ImportProduct[] = []
  const failedImages: string[] = []

  for (let i = 0; i < imageFiles.length; i++) {
    const filename = imageFiles[i]
    const filePath = path.join(IMAGE_DIR, filename)
    process.stdout.write(`🔍 [${i + 1}/${imageFiles.length}] Analyzing: ${filename}...`)

    try {
      const base64 = imageToBase64(filePath)
      const result = await analyzeImage(base64, apiKey, i)
      const product = createProduct(result, filename, i)
      products.push(product)
      console.log(` ✓ ${result.nameAr}`)
    } catch (err) {
      failedImages.push(filename)
      console.log(` ✗ ${err instanceof Error ? err.message.slice(0, 80) : "Failed"}`)
    }

    await new Promise((r) => setTimeout(r, 300))
  }

  console.log(`\n${"─".repeat(60)}`)
  console.log(`✅ Analyzed: ${products.length}/${imageFiles.length} images`)
  if (failedImages.length > 0) {
    console.log(`❌ Failed:   ${failedImages.length} images`)
    console.log(`   ${failedImages.join(", ")}`)
  }

  if (products.length === 0) {
    console.log("\n⚠ No products detected. Exiting.")
    process.exit(0)
  }

  printPreview(products)

  console.log(`\n${"═".repeat(100)}`)
  console.log(`⚠  Ready to import ${products.length} products into the store database.`)
  console.log(`   This will modify src/lib/data/products.ts`)
  console.log(`   A backup will be created automatically.`)
  console.log(`${"═".repeat(100)}\n`)

  process.stdout.write(`Proceed with import? (y/N): `)

  process.stdin.once("data", (data) => {
    const answer = data.toString().trim().toLowerCase()
    if (answer === "y" || answer === "yes") {
      console.log("\n📦 Copying images...")
      copyImages(products, IMAGE_DIR)

      console.log("💾 Inserting products into database...")
      insertProducts(products)

      console.log(`\n🎉 Done! ${products.length} products imported successfully.`)
    } else {
      console.log("\n✖ Import cancelled.")
    }
    process.exit(0)
  })
}

main().catch((err) => {
  console.error("\n✗ Fatal error:", err.message || err)
  process.exit(1)
})
