import os

rename_map = {
    "air-fryer-large-capacity.jpg": "smart-maternity-bag.jpg",
    "comfortable-men-sneakers.jpg": "classic-mens-watch.jpg",
    "electric-stainless-chopper.jpg": "ultra-smartwatch.jpg",
    "elegant-women-bag-set.jpg": "women-bag-set.jpg",
    "kids-cotton-clothing-set.jpg": "stainless-steel-chopper.jpg",
    "kids-smart-educational-tablet.jpg": "gold-hair-clipper.jpg",
    "luxury-men-classic-watch.jpg": "smart-body-scale.jpg",
    "luxury-modern-abaya.jpg": "handheld-steam-iron.jpg",
    "magnetic-car-phone-mount.jpg": "hair-straightener-comb.jpg",
    "non-slip-yoga-mat.jpg": "electric-neck-massager.jpg",
    "portable-car-vacuum.jpg": "mens-white-sneakers.jpg",
    "powerful-upright-vacuum.jpg": "food-vacuum-sealer.jpg",
    "professional-makeup-brush-set.jpg": "portable-car-vacuum-new.jpg", # renamed to avoid collision
    "professional-massage-gun.jpg": "flawless-hair-remover.jpg",
    "professional-men-clipper.jpg": "mens-beard-trimmer.jpg",
    "smart-led-eye-care-lamp.jpg": "elegant-womens-handbag.jpg",
    "smartwatch-ultra-sports.jpg": "triple-barrel-hair-curler.jpg",
}

target_folder = "/Users/omarouhaddou/Desktop/vs code test/public/products"

for old_name, new_name in rename_map.items():
    old_path = os.path.join(target_folder, old_name)
    new_path = os.path.join(target_folder, new_name)
    if os.path.exists(old_path):
        os.rename(old_path, new_path)
        print(f"Renamed {old_name} -> {new_name}")
    else:
        print(f"Not found: {old_name}")

print("Done renaming.")
