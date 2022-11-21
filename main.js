song = "";

function preload()
{
    song = loadSound("music1.mp3");
    song = loadSound("music2.mp3");
    

}

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function setup()
{
    canvas = createcanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Console foi Inicialiazado!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keyPoints[10].score;
        scoreLeftWrist = results[0].pose.keyPoints[9].score;

        console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
    }
}

function draw() 
{
    image(video, 0, 0, 600, 500);
    fill("#CC3CFE");
    stroke("#FFED0F");

    if(scoreRightWrist > 0.2)
    {
        
    }
}
 