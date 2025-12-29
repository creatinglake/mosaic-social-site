import numpy as np
from PIL import Image
import os
from collections import Counter

input_path = "attached_assets/Cracked_Column_Large_1767031220976.png"
output_path = "attached_assets/generated_images/cracked_column_large_processed.png"

def hex_from_rgb(rgb):
    return '#{:02x}{:02x}{:02x}'.format(rgb[0], rgb[1], rgb[2])

def process_image(input_path, output_path):
    print(f"Processing {input_path}...")
    try:
        img = Image.open(input_path).convert("RGBA")
        data = np.array(img)
        
        # Flatten for color analysis
        pixels = data.reshape(-1, 4)
        
        # Filter out transparent pixels
        visible_pixels = [tuple(p) for p in pixels if p[3] > 50]
        
        if not visible_pixels:
            print("Image appears empty or fully transparent.")
            return

        counts = Counter(visible_pixels)
        sorted_colors = counts.most_common()
        
        # Find dominant color that is not black (background)
        icon_color = None
        for color, count in sorted_colors:
            r, g, b, a = color
            # Skip black-ish (assuming background is black)
            if r < 20 and g < 20 and b < 20:
                continue
            icon_color = color
            break
            
        if icon_color:
             hex_color = hex_from_rgb(icon_color[:3])
             print(f"DETECTED_COLOR: {hex_color}")
        else:
             print("Could not detect icon color (might be all black).")
             # Fallback if the icon itself is black/dark and background is transparent?
             # But the user said "Match the heading text to the column color", implying a specific color.

        # Remove background based on corner pixel
        corner_pixel = data[0, 0]
        # Check if corner is black-ish (background)
        if corner_pixel[0] < 30 and corner_pixel[1] < 30 and corner_pixel[2] < 30:
             bg_r, bg_g, bg_b, bg_a = corner_pixel
             tolerance = 30
             mask = (np.abs(data[..., 0] - bg_r) < tolerance) & \
                    (np.abs(data[..., 1] - bg_g) < tolerance) & \
                    (np.abs(data[..., 2] - bg_b) < tolerance)
             data[..., 3][mask] = 0
             print("Removed dark background.")
        
        new_img = Image.fromarray(data)
        new_img.save(output_path)
        print(f"Saved processed image to {output_path}")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if os.path.exists(input_path):
        process_image(input_path, output_path)
    else:
        print(f"File not found: {input_path}")
