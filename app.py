from flask import Flask, request, render_template
import numpy as np
import cv2
import base64

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


def update(frame):
    cv2.imshow("test", frame)
    cv2.waitKey()


@app.route("/get-images", methods=["POST"])
def get_images():
    image_str = request.form.get('image').split('data:image/png;base64,')[-1]

    img_byt = base64.b64decode(image_str)

    # convert a byte string to a numpy array
    image = np.fromstring(img_byt, np.uint8)

    # convert a numpy array to an opencv compatible image
    frame = cv2.imdecode(image, cv2.IMREAD_COLOR)

    image_name = f"image-{get_images.counter}.png"
    get_images.counter += 1
    cv2.imwrite(f'./images/{image_name}', frame)
    return ""


get_images.counter = 0


if __name__ == "__main__":
    app.run(debug=True, threaded=True)
