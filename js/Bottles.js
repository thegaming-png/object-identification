document.getElementById('backArrow').addEventListener('click', () => {
    window.location = '../index.html'
});


function preload(){
    img = loadImage("bottles.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = 'Status: Detecting Objects'

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function draw() {
    // img = 

    image(img, 0, 0, 640, 420);
    // objectDetector.detect(video, gotResult);
    
}

function modelLoaded() {
    console.log("MODEL LOADED")
}

// function gotResult() {
//     console.log('gotResult')
// }