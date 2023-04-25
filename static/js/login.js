console.log("Hello World!");

const video_element = document.getElementById("video-element")

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({video: true})
    .then((stream) => {
        video_element.srcObject = stream
    })
}