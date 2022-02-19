//Variables//
img='';
statusBar='';
Arraylength='';
objects=[];
percent=0;
//Variables//

document.getElementById('backArrow').addEventListener('click', () => {
    window.location = '../index.html'
});


function preload(){
    img = loadImage("bedroom.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = 'Status: Detecting Objects'

}

function draw() {
    // img = 

    image(img, 0, 0, 640, 420);
    objectDetector.detect(img, gotResult);
    for (let index = 0; index < objects.length; index++) {
        fill('#FF0000');
        noFill();
        stroke('#FF0000');
        rect(objects[index].x, objects[index].y, objects[index].width, objects[index].height);
        percent = Math.floor((objects[index].confidence) * 100);
        text(objects[index].label + " " + percent + "%", objects[index].x, objects[index].y + 15);
    }
    
}

function modelLoaded() {
    console.log("MODEL LOADED")
    statusbar = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if (error) {
        console.log(error);
    }
    console.log(results);
    Arraylength = results['length'];
    objects = results;
    document.getElementById('status').innerHTML = 'Status: Objects Detected Success';
    
}