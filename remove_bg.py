import os
from PIL import Image

def remove_black_background(input_path, output_path):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        datas = img.getdata()
        
        newData = []
        # Threshold for black (e.g., all RGB values below 30)
        for item in datas:
            if item[0] < 30 and item[1] < 30 and item[2] < 30:
                newData.append((0, 0, 0, 0)) # Transparent
            else:
                newData.append(item)
                
        img.putdata(newData)
        img.save(output_path, "PNG")
        print("Success: Removed background")
    except Exception as e:
        print(f"Error: {e}")

remove_black_background("public/mira-logo.png", "public/mira-logo-transparent.png")
