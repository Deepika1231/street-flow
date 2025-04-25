# Realistic placeholder for semantic segmentation
from PIL import Image
import numpy as np

def detect_level(image_path):
    img = Image.open(image_path).convert('L').resize((128, 128))
    img_array = np.array(img)
    # Simulate "water" as bright pixels
    water_pixels = np.sum(img_array > 180)
    total_pixels = img_array.size
    water_ratio = water_pixels / total_pixels
    # Scale to a 0-5 water level
    return round(water_ratio * 5, 2)
