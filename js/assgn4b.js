function setup(){
	cv = createCanvas(500,500);
	cv.attribute("style","position: relative");
	cv.attribute("align","right");
}

function draw(){
    
        for (var i = 0; i < 20; i++){ 
        for (var j = 0; j < 20; j++){
            
	var x1 = i;
	var y1 = j;
	var xpos = width/10 + 20*i;
	var ypos = height/10 + 20*j;
	var d = dist(xpos, ypos, mouseX, mouseY);
		
	if (d < 650){
		if (xpos < mouseX < xpos || ypos < mouseY < ypos){
			fill(25,105,105);
			ellipse(xpos, ypos, d/20, d/20);
		}
	}
	else{
		fill(25,105,105);
		ellipse(xpos, ypos, 20, 20)
	}
						
        }
    }
}

function mouseMoved(){
	clear();
// 	text(mouseX, 450,300);
// 	text(20-mouseX/4, 450,350);
	redraw();
}
