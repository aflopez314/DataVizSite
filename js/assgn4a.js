console.log("is this working??");


function setup(){
    createCanvas(500,500);
    
    noStroke();
    colorMode(HSB, 100);
    for (var w = 0; w < 100; w++){
        for (var h =0; h < 100; h++){
            fill(w, h, 100);
            rect(width/5 + 5*w, height/5 + 5*h, 5, 5);
        }
    }
}

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");