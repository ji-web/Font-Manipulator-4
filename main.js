right_wrist_X=0;
left_wrist_X=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(590,500);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function draw(){
    background("#228B22");
    textSize(difference);
    fill("#FBF7F5");
    text("There will be a celebration for christmas.",50,400);
    text("Date:25/12/2021",70,420);
    text("Time:10.00 to 12.00",90,450);
}

function modelLoaded(){
    console.log("poseNet is loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        left_wrist_X=results[0].pose.leftWrist.x;
        right_wrist_X=results[0].pose.rightWrist.x;
        difference=floor(left_wrist_X-right_wrist_X);
        console.log("Left Wrist Number is - "+left_wrist_X+"Right Wrist Number is - "+right_wrist_X+"difference"+difference);
        
    }
}



