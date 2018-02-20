var harlemTable;
var startX = 26;
var endX = 400;
var startY = 13;
var endY = 600;
var startYear = 1800;
var endYear = 2015;
var startOwn = 0;


function preload(){
    harlemTable = loadTable("data/harlem2.csv", 'csv', 'header');
    console.log('table has loaded...');
    
}

function setup() {
    createCanvas(640, 480);
    colorMode(HSB);
    background(53, 4, 11);
    textFont('Roboto');
    textSize(25);
    textAlign(BOTTOM);
    fill(35, 50, 50);
    text("Year of Housing Units by Owner Type, 1800 to 2015 (L to R)", 12, 440);
    fill(35, 60, 60);
    
    
    /*print(harlemTable.getRowCount());
    print(harlemTable.getColumnCount());*/
    
    noLoop();
    
}

function draw(){
    
    for (var i = 0; i < harlemTable.getRowCount(); i++){
        var year = harlemTable.getNum(i, 'YearBuilt');
        var own = harlemTable.getString(i, 'OwnerType');
        
        if (own == 'X'){
            positionX = map(year, startYear, endYear, startX, endX);
            positionY = map(10, 0, 100, startY, endY);
            ellipse(positionX, positionY, 6, 6);
            textAlign(LEFT);
            text(own, 475, 75);
            
        } else if (own == 'P'){
            positionX = map(year, startYear, endYear, startX, endX);
            positionY = map(20, 0, 100, startY, endY);
            ellipse(positionX, positionY, 6, 6);
            textAlign(LEFT);
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
            text(own, 475, 245);
            
        } else if (own == 'M'){
            positionX = map(year, startYear, endYear, startX, endX);
            positionY = map(50, 0, 100, startY, endY);
            ellipse(positionX, positionY, 6, 6);
            textAlign(LEFT);
            text(own, 475, 305);
            
        } else {
            positionX = map(year, startYear, endYear, startX, endX);
            positionY = map(60, 0, 100, startY, endY);
            ellipse(positionX, positionY, 6, 6);
            textAlign(LEFT);
            text('Null', 475, 365);
            
        }
        
    }
    
}
