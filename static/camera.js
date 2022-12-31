console.log("hello");

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");


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

  }, 10)

};


hack()