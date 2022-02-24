function setup(){
    canvas = createCanvas(500 , 500);
    canvas.position(560,150);

    video = createCapture(VIDEO);
    video.size(500,500)

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on("pose",gotPoses);
}

function draw(){
    background("#84FAD2");
}

function modalLoaded(){
    console.log("Model is loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}