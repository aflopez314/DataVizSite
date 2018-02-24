var harlemTable;
var startX = 26;
var endX = 400;
var startY = 13;
var endY = 600;
var startYear = 1800;
var endYear = 2015;
var buttonLabels = ['All', '1800-1930', '1931-1960', '1961-2015'];
var buttonStartX = 80;
var buttonStartY = 15;
var buttonLength = 90;
var buttonHeight = 15;
var buttonSpacing = 10;
var selectedButton = 0;
var oldUnits = new p5.Table;
var midUnits = new p5.Table;
var newUnits = new p5.Table;


function preload(){
    harlemTable = loadTable("data/harlem2.csv", 'csv', 'header');
    console.log('table has loaded...');
    
}

function setup() {
    var cnv = createCanvas(640, 480);
    cnv.parent('myCanvas3');
    colorMode(HSB);
    background(53, 4, 11);
    textFont('Roboto Condensed');
    textAlign(BOTTOM);
    fill(35, 50, 50);
    textSize(14);
    text("Year of Housing Units by Owner Type, 1800 to 2015 (L to R)", 160, 440);
    fill(35, 60, 60);
    
      /* start line */
    fill(255);
    line(startX - 3, startY + 50, startX - 3, startY + 362);
    textSize(12);
    text('1800', startX - 8, startY + 390);
    
    /* end line */
    fill(255);
    line(endX + 10, startY + 50, endX + 10, startY + 362);
    textSize(12);
    text('2015', endX + 8, startY + 390);
    
    /* mid line */
    fill(255);
    line(startX + 191, startY + 50, startX + 191, startY + 362);
    textSize(12);
    text('1910', startX + 188, startY + 390);
    
    
    /*print(harlemTable.getRowCount());
    print(harlemTable.getColumnCount());*/
    
    createNewTable();
    noLoop();
    
}

function createNewTable(){
  oldUnits.addColumn('YearBuilt');
  oldUnits.addColumn('OwnerType');
  midUnits.addColumn('YearBuilt');
  midUnits.addColumn('OwnerType');
  newUnits.addColumn('YearBuilt');
  newUnits.addColumn('OwnerType');
  for (var i = 0; i < harlemTable.getRowCount(); i++) {
    var age = harlemTable.getNum(i, 'age');
    if (age <= 1930) {
      var newRow = oldUnits.addRow();
      newRow.setString('YearBuilt', harlemTable.getString(i, 'YearBuilt'));
      newRow.setNum('OwnerType', harlemTable.getNum(i, 'OwnerType'));
    }
    else {
        age > 1930 && age <= 1961;
      var newRow = harlemBudget.addRow();
      newRow.setString('O', harlemTable.getString(i, 'YearBuilt'));
      newRow.setNum('OwnerType', moviesTable.getNum(i, 'OwnerType'));
    }
  }
  print('New tables created...');
}

function drawDots(){
    colorMode(HSB);
    fill(255);
    for (var i = 0; i < harlemTable.getRowCount(); i++){
        var year = harlemTable.getNum(i, 'YearBuilt');
        var own = harlemTable.getString(i, 'OwnerType');
        
        if (own == 'X'){
            positionX = map(year, startYear, endYear, startX, endX);
            positionY = map(10, 0, 100, startY, endY);
            ellipse(positionX, positionY, 6, 6);
            textSize(25);
            textAlign(LEFT);
            text(own, 475, 75);
            
        } else if (own == 'P'){
            positionX = map(year, startYear, endYear, startX, endX);
            positionY = map(20, 0, 100, startY, endY);
            ellipse(positionX, positionY, 6, 6);
            textSize(25);
            textAlign(LEFT);
            text(own, 475, 135);
            
        } else if (own == 'C'){
            positionX = map(year, startYear, endYear, startX, endX);
            positionY = map(30, 0, 100, startY, endY);
            ellipse(positionX, positionY, 6, 6);
            textSize(25);
            textAlign(LEFT);
            text(own, 475, 195);
            
        } else if (own == 'O'){
            positionX = map(year, startYear, endYear, startX, endX);
            positionY = map(40, 0, 100, startY, endY);
            ellipse(positionX, positionY, 6, 6);
            textSize(25);
            textAlign(LEFT);
            text(own, 475, 245);
            
        } else if (own == 'M'){
            positionX = map(year, startYear, endYear, startX, endX);
            positionY = map(50, 0, 100, startY, endY);
            ellipse(positionX, positionY, 6, 6);
            textSize(25);
            textAlign(LEFT);
            text(own, 475, 305);
            
        } else {
            positionX = map(year, startYear, endYear, startX, endX);
            positionY = map(60, 0, 100, startY, endY);
            ellipse(positionX, positionY, 6, 6);
            textSize(25);
            textAlign(LEFT);
            text('Null', 475, 365);
            
        }  
    } 
}


function drawYears(){
    if (selectedButton == 0){
    }  
    if (selectedButton == 1){
        fill(145);
        for (var i = 0; i < harlemTable.getRowCount(); i++){
            var year = harlemTable.getNum(i, 'YearBuilt');
            var own = harlemTable.getString(i, 'OwnerType');
            own == 'X' && year <= 1930;
            positionX = map(year, startYear, endYear, startX, endX);
            positionY = map(10, 0, 100, startY, endY);
            ellipse(positionX, positionY, 6, 6);
            textAlign(LEFT);
            text(own, 475, 75);
    }
    }
}

function drawButtons(){
    colorMode(HSB);
    textAlign(CENTER, TOP);
    for (var i = 0; i < buttonLabels.length; i++){
        if (selectedButton == i){
             fill(35, 50, 50);
        } else{
            fill(35, 30, 30);
        }
        stroke(100);
        rect(buttonStartX + i * (buttonLength + buttonSpacing), buttonStartY, buttonLength, buttonHeight);
        fill(255);
        noStroke();
        text(buttonLabels[i], buttonStartX + i *(buttonLength + buttonSpacing) + buttonLength/2, buttonStartY + 2);
    }
    noLoop();
}

function mousePressed(){
     if (mouseX >= buttonStartX && mouseX <= (buttonStartX + buttonLength) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)) {
         selectedButton = 0;
        /* redraw();*/
     } else if (mouseX >= (buttonStartX + buttonLength + buttonSpacing) && mouseX <= (buttonStartX + buttonLength * 2 + buttonSpacing) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)){
         selectedButton = 1;
         redraw();
         
     } else if (mouseX >= (buttonStartX + buttonLength + buttonSpacing) && mouseX <= (buttonStartX + buttonLength * 3 + buttonSpacing * 2) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)){
         selectedButton = 2;
         redraw();
         
     } else if (mouseX >= (buttonStartX + buttonLength + buttonSpacing) && mouseX <= (buttonStartX + buttonLength * 4 + buttonSpacing * 2) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)){
         selectedButton = 3;
         redraw();
         
     }
}

function draw(){
    /*drawLines();*/
    drawButtons();
    drawDots();
    parent.document('myCanvas3');
}