import numpy as np
from PIL import Image
import os

input_path = "attached_assets/generated_images/cracked_column_final.png"
output_path = "attached_assets/generated_images/cracked_column_burgundy.png"
target_hex = "#5E161C"

def hex_to_rgb(hex_color):
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def recolor_image(input_path, output_path, target_color_hex):
    print(f"Recoloring {input_path} to {target_color_hex}...")
    try:
        img = Image.open(input_path).convert("RGBA")
        data = np.array(img)
        
        target_rgb = hex_to_rgb(target_color_hex)
        
        # Get alpha channel
        alpha = data[..., 3]
        
        # Create a mask of non-transparent pixels
        mask = alpha > 0
        
        # Apply target color to all non-transparent pixels
        # Preserving the alpha channel
        data[..., 0][mask] = target_rgb[0]
        data[..., 1][mask] = target_rgb[1]
        data[..., 2][mask] = target_rgb[2]
        
        # Save
        new_img = Image.fromarray(data)
        new_img.save(output_path)
        print(f"Saved recolored image to {output_path}")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if os.path.exists(input_path):
        recolor_image(input_path, output_path, target_hex)
    else:
        print(f"File not found: {input_path}")
