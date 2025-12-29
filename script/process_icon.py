import numpy as np
from PIL import Image
import os
from collections import Counter

input_path = "attached_assets/Cracked_Column_SVG_1767028841199.png"
output_path = "attached_assets/generated_images/cracked_column_final.png"

def hex_from_rgb(rgb):
    return '#{:02x}{:02x}{:02x}'.format(rgb[0], rgb[1], rgb[2])

def process_image(input_path, output_path):
    print(f"Processing {input_path}...")
    try:
        img = Image.open(input_path).convert("RGBA")
        data = np.array(img)
        
        # Analyze colors to find the dark red
        # Flatten the array to list of pixels
        pixels = data.reshape(-1, 4)
        
        # Filter out transparent or near-transparent pixels
        visible_pixels = [tuple(p) for p in pixels if p[3] > 50]
        
        if not visible_pixels:
            print("Image appears empty or fully transparent.")
            return

        # Find most common colors
        # We want to ignore white/black background if present
        # Heuristic: The icon color is likely the most common color that is NOT white/black/transparent
        
        counts = Counter(visible_pixels)
        sorted_colors = counts.most_common()
        
        # Determine background color (usually corner pixel)
        # But for this specific task, let's look for the dark red.
        # It's likely the most frequent non-neutral color.
        
        icon_color = None
        for color, count in sorted_colors:
            r, g, b, a = color
            # Skip white-ish
            if r > 240 and g > 240 and b > 240:
                continue
            # Skip black-ish (if it's background) - but wait, the icon is dark. 
            # The icon might be the dark color.
            # Let's assume the icon is the most common visible color that isn't pure white.
            # If the background is black, we might have an issue.
            
            icon_color = color
            break
            
        if icon_color:
             print(f"Detected Icon Color: {hex_from_rgb(icon_color[:3])}")
        
        # Remove background if it's not transparent?
        # Let's check the corner.
        corner_pixel = data[0, 0]
        if corner_pixel[3] > 0: # If corner is not transparent
             # Assume corner is background color
             bg_r, bg_g, bg_b, bg_a = corner_pixel
             
             # Create mask for background
             # Allow small tolerance
             tolerance = 10
             mask = (np.abs(data[..., 0] - bg_r) < tolerance) & \
                    (np.abs(data[..., 1] - bg_g) < tolerance) & \
                    (np.abs(data[..., 2] - bg_b) < tolerance)
             
             data[..., 3][mask] = 0
             print("Removed background based on corner pixel.")
        
        # Save
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
