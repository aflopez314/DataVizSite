var harlemTable;
var startX = 26;
var endX = 400;
var startY = 13;
var endY = 600;
var startYear = 1800;
var endYear = 2015;


function preload(){
    harlemTable = loadTable("data/harlem2.csv", 'csv', 'header');
    console.log('table has loaded...');
    
}

function setup() {
    var cnv = createCanvas(640, 480);
    cnv.parent('myCanvas2');
    colorMode(HSB);
    background(53, 4, 11);
    textFont('Roboto Condensed');
<<<<<<< HEAD
=======
    textSize(25);
>>>>>>> 8b6bd1146fd49de4bec5b39299279fb916c7821b
    textAlign(BOTTOM);
    textSize(14);
    fill(35, 60, 60);
    text('Year of Housing Units by Owner Type, 1800 to 2015 (L to R)', 160, 440);
    
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
    
    noLoop();
    
}

function draw(){
    colorMode(HSB);
    fill(255);
    
    for (var i = 0; i < harlemTable.getRowCount(); i++){
        var year = harlemTable.getNum(i, 'YearBuilt');
        var own = harlemTable.getString(i, 'OwnerType');
        
        if (own == 'X'){
            positionX = map(year, startYear, endYear, startX, endX);
            positionY = map(10, 0, 100, startY, endY);
            ellipse(positionX, positionY, 6, 6);
            textAlign(LEFT);
            textSize(25);
            text(own, 475, 75);
            
        } else if (own == 'P'){
            positionX = map(year, startYear, endYear, startX, endX);
            positionY = map(20, 0, 100, startY, endY);
            ellipse(positionX, positionY, 6, 6);
            textAlign(LEFT);
            textSize(25);
            text(own, 475, 135);
            
        } else if (own == 'C'){
            positionX = map(year, startYear, endYear, startX, endX);
            positionY = map(30, 0, 100, startY, endY);
            ellipse(positionX, positionY, 6, 6);
            textAlign(LEFT);
            text(own, 475, 195);
            
        } else if (own == 'O'){
            positionX = map(year, startYear, endYear, startX, endX);
            positionY = map(40, 0, 100, startY, endY);
            ellipse(positionX, positionY, 6, 6);
            textAlign(LEFT);
            textSize(25);
            text(own, 475, 245);
            
        } else if (own == 'M'){
            positionX = map(year, startYear, endYear, startX, endX);
            positionY = map(50, 0, 100, startY, endY);
            ellipse(positionX, positionY, 6, 6);
            textAlign(LEFT);
            textSize(25);
            text(own, 475, 305);
            
        } else {
            positionX = map(year, startYear, endYear, startX, endX);
            positionY = map(60, 0, 100, startY, endY);
            ellipse(positionX, positionY, 6, 6);
            textAlign(LEFT);
            textSize(25);
            text('Null', 475, 365);
            
        }
        
    }
   
}