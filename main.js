status = "";

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    input = document.getElementById("input").value;
}

function modelLoaded(){
    console.log("Model Is Loaded");
    status = true;
}

function draw(){
    image(video, 0, 0, 480, 380);
}