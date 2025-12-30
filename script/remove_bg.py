import numpy as np
from PIL import Image
import os

input_path = "attached_assets/image_1767116064187.png"
output_path = "attached_assets/image_1767116064187_transparent.png"

def make_transparent(input_path, output_path):
    print(f"Processing {input_path}...")
    try:
        img = Image.open(input_path).convert("RGBA")
        data = np.array(img)

        # Define what is "white" (e.g. > 240 in all channels)
        r, g, b, a = data.T
        white_areas = (r > 240) & (g > 240) & (b > 240)
        
        # Set alpha to 0 for white areas
        data[..., 3][white_areas.T] = 0
        
        # Save
        new_img = Image.fromarray(data)
        new_img.save(output_path)
        print(f"Saved transparent image to {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if os.path.exists(input_path):
        make_transparent(input_path, output_path)
    else:
        print(f"File not found: {input_path}")
