console.log("is this working??");

function setup(){
    createCanvas(500,500);
}

function draw(){
    
        for (var i = 0; i < 22.6; i++){
        for (var j = 0; j < 22.6; j++){
            
            var x1 = i;
            var y1 = j;
            var x2 = mouseX;
            var y2 = mouseY;
            var d = int(dist(x1,y1,x2,y2))
            var r = 20 - d;
            if (r > -20){
                fill(105,105,105);
            ellipse(width/20 + 20*i, height/20 + 20*j, 20-d, 20-d);
            }
            else{
            fill(105,105,105);
            ellipse(width/20 + 20*i, height/20 + 20*j, 20-d, 20-d);
            }
        }
        }
    }

/*
function draw(){
     background(232, 44, 12);
    if (mouseIsPressed){
        fill(255,0, 0, 5);
    }
    else{
        fill(255);
    }
    for (var i = 0; i < 10; i++){
        for (var j = 0; j < 10; j++){
        ellipse(mouseX + 30*i, mouseY + 30*j, 20, 20);   
        }
    }   
}
*/


