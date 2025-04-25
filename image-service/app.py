from flask import Flask, request, jsonify
from water_level_detector import detect_level
import os

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload():
    image = request.files['image']
    filepath = os.path.join('uploads', image.filename)
    os.makedirs('uploads', exist_ok=True)
    image.save(filepath)
    level = detect_level(filepath)
    return jsonify({'water_level': level})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
