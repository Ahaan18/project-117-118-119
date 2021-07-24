function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    x = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/erzy40_xm/model.json', modelLoaded);
}
function modelLoaded(){
    console.log("FAMILY MEMBER PICTURES (aka: ml5.js or model) are loaded!!!");
}
function draw(){
    image(video, 0, 0, 300, 300);
    x.classify(video, gotresult);
}
function gotresult(error, result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("object").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}