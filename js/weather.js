/*Global Variables*/
var apiKey = 'a3ab5769fd0b7e46e027d5598ad1dcd7';
var baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
var button;
var cityInput;
var description = '';
var temperature = 0;
var humidity = 0;
var pressure = 0;
var s = '';
var rClear = /lear\b/;
var rDrizzle = /izzle\b/;
var rRain = /ain\b/;
var rSnow = /now\b/;
var rClouds = /louds\b/;
var rWind = /ind\b/;
var rMist = /ist\b/;
var rStorm = /torm\b/;

/*Setup Canvas*/
function setup(){
    var cnv = createCanvas(640, 480);
    var c;
    cnv.parent('myCanvas4');
    button = select('#submit');
    cityInput = select('#city');
    button.mousePressed(queryAPI);
    
    c = color('hsb(0, 0%, 100%)')
    fill(c);
    textSize(16);
    textFont('Roboto Condensed');
    
    noStroke();
    ellipse(320, 40, 40, 40);
    cloud(550, 240, 0.8);
    cloudRain(320, 440, 0.8, 255, 255, 255);
    windy(40, 240, 255);
    
    noLoop();
    
}


/*Preload Data*/
function queryAPI(){
    var request = baseURL + cityInput.value() + '&apikey=' + apiKey + '&units=imperial';
    loadJSON(request, getWeatherData);
    
}

function getWeatherData(apiData){
    
    weatherData = apiData;
    s = weatherData.weather[0].main;
    description = weatherData.weather[0].description;
    temperature = weatherData.main.temp;
    humidity = weatherData.main.humidity;
    pressure = weatherData.main.pressure;
    print(weatherData);
    redraw();
    
}

function conditionRain(s){
    var regexp = /ain\b/;
    print(regexp.test(s));
}

/*function conditionClear(s){
    var regexp = /lear\b/;
    print(regexp.test(s));
}*/


function draw(){
    
    if (weatherData){
        if (rClear.test(s)){
        clear();
        var c;
        var rd = 255;
        var gn = 255;
        var bl = 255;
        var temp = temperature;
            
        textSize(16);
        noStroke();
        strokeWeight(0.5);
        textAlign(CENTER, CENTER);
        
        c = color('hsb(60, 63%, 80%)');
        fill(c);
        text('The current weather for ' + cityInput.value() + ' is:', 320, 200);
        text(description, 320, 220);
        text(humidity + '% humidity', 320, 240);
        text(pressure + ' hPa (pressure)', 320, 260);
        
        ellipse(320, 40, 40, 40);
        
        c = color('hsb(0, 0%, 100%)');
        fill(c);
        windy(40, 240, 255);
        cloud(550, 240, 0.8);
        cloudRain(320, 440, 0.8, 255, 255, 255);
        
        if (temp >= -20 && temp < 50){
            c = color(rd/(temp * 0.1), gn - 40, bl);
            fill(c);
            noStroke();
            textSize(30);
            text(temperature + ' F', 320, 150);
        } else if(temp >= 50 && temp < 75){
            c = color(rd - 40, gn - 36, bl/(temp * 0.3));
            fill(c);
            noStroke();
            textSize(30);
            text(temperature + ' F', 320, 150);
                  }else if (temp >= 75){
                      c = color(rd, gn/(temp * 0.1), bl/(temp * 0.1));
                      fill(c);
                      noStroke();
                      textSize(30);
                      text(temperature + ' F', 320, 150);
            
        }
    } else if (rClouds.test(s)){
         clear();
        var c;
        var rd = 255;
        var gn = 255;
        var bl = 255;
        var temp = temperature;
            
        textSize(16);
        noStroke();
        strokeWeight(0.5);
        textAlign(CENTER, CENTER);
        
        c = color('hsb(207, 18%, 70%)');
        fill(c);
        text('The current weather for ' + cityInput.value() + ' is:', 320, 200);
        text(description, 320, 220);
        text(humidity + '% humidity', 320, 240);
        text(pressure + ' hPa (pressure)', 320, 260);
        
        cloud(550, 240, 0.8);
        
        c = color('hsb(0, 0%, 100%)');
        fill(c);
        windy(40, 240, 255);
        cloudRain(320, 440, 0.8, 255, 1255, 255);
        ellipse(320, 40, 40, 40);
        
        if (temp >= -20 && temp < 50){
            c = color(rd/(temp * 0.1), gn/(temp * 0.1), bl);
            fill(c);
            noStroke();
            textSize(30);
            text(temperature + ' F', 320, 150);
        } else if(temp >= 50 && temp < 75){
            c = color(rd - 40, gn - 36, bl/(temp * 0.3));
            fill(c);
            noStroke();
            textSize(30);
            text(temperature + ' F', 320, 150);
                  }else if (temp >= 75){
                      c = color(rd, gn/(temp * 0.1), bl/(temp * 0.1));
                      fill(c);
                      noStroke();
                      textSize(30);
                      text(temperature + ' F', 320, 150);
            
        }
    } else if (rRain.test(s) || rSnow.test(s) || rStorm.test(s) || rDrizzle.test(s)){
         clear();
        var c;
        var rd = 255;
        var gn = 255;
        var bl = 255;
        var temp = temperature;
        
        textSize(16);
        noStroke();
        strokeWeight(0.5);
        textAlign(CENTER, CENTER);
        
        c = color('hsb(207, 18%, 70%)');
        fill(c);
        text('The current weather for ' + cityInput.value() + ' is:', 320, 200);
        text(description, 320, 220);
        text(humidity + '% humidity', 320, 240);
        text(pressure + ' hPa (pressure)', 320, 260);
        
        cloudRain(320, 440, 0.8, 0, 191, 255);
        
        c = color('hsb(0, 0%, 100%)');
        fill(c);
        windy(40, 240, 255);
        cloud(550, 240, 0.8);
        ellipse(320, 40, 40, 40);
        
        if (temp >= -20 && temp < 50){
            c = color(rd/(temp * 0.1), gn - 40, bl);
            fill(c);
            noStroke();
            textSize(30);
            text(temperature + ' F', 320, 150);
        } else if(temp >= 50 && temp < 75){
            c = color(rd - 40, gn - 36, bl/(temp * 0.3));
            fill(c);
            noStroke();
            textSize(30);
            text(temperature + ' F', 320, 150);
                  }else if (temp >= 75){
                      c = color(rd, gn/(temp * 0.1), bl/(temp * 0.1));
                      fill(c);
                      noStroke();
                      textSize(30);
                      text(temperature + ' F', 320, 150);
            
        }
    }else if (rWind.test(s) || rMist.test(s)){
         clear();
        var c;
        var rd = 255;
        var gn = 255;
        var bl = 255;
        var temp = temperature;
        
        textSize(16);
        noStroke();
        strokeWeight(0.5);
        textAlign(CENTER, CENTER);
        
        c = color('hsb(207, 45%, 70%)');
        fill(c);
        text('The current weather for ' + cityInput.value() + ' is:', 320, 200);
        text(description, 320, 220);
        text(humidity + '% humidity', 320, 240);
        text(pressure + ' hPa (pressure)', 320, 260);
        
        windy(40, 240, c);
        
        c = color('hsb(0, 0%, 100%)');
        fill(c);
        noStroke();
        ellipse(320, 40, 40, 40);
        cloud(550, 240, 0.8);
        cloudRain(320, 440, 0.8, 255, 255, 255);
        
        if (temp >= -20 && temp < 50){
            c = color(rd/(temp * 0.1), gn/(temp * 0.1), bl);
            fill(c);
            noStroke();
            textSize(30);
            text(temperature + ' F', 320, 150);
        } else if(temp >= 50 && temp < 75){
            c = color(rd - 40, gn - 36, bl/(temp * 0.3));
            fill(c);
            noStroke();
            textSize(30);
            text(temperature + ' F', 320, 150);
                  }else if (temp >= 75){
                      c = color(rd, gn/(temp * 0.1), bl/(temp * 0.1));
                      fill(c);
                      noStroke();
                      textSize(30);
                      text(temperature + ' F', 320, 150);
            
        }
    }  
    }
}

        

function cloud(x, y, size){
    noStroke();
    arc(x, y, 25 * size, 20 * size, PI + TWO_PI, TWO_PI);
    arc(x + 10, y, 25 * size, 45 * size, PI + TWO_PI, TWO_PI);
    arc(x + 25, y, 25 * size, 35 * size, PI + TWO_PI, TWO_PI);
    arc(x + 40, y, 30 * size, 20 * size, PI + TWO_PI, TWO_PI);
}

function cloudRain(x, y, size, rd, gn, bl){
    stroke(rd, gn, bl);
    strokeWeight(2);
    line(x - 5, y, x + 15, y + 15);
    line(x + 20, y, x + 35, y + 10);
    line(x + 45, y, x + 60, y + 13);
    
    noStroke();
    arc(x, y, 25 * size, 20 * size, PI + TWO_PI, TWO_PI);
    arc(x + 10, y, 25 * size, 45 * size, PI + TWO_PI, TWO_PI);
    arc(x + 25, y, 25 * size, 35 * size, PI + TWO_PI, TWO_PI);
    arc(x + 40, y, 30 * size, 20 * size, PI + TWO_PI, TWO_PI);
    
}

function windy(x, y, cl){
    stroke(cl);
    strokeWeight(2);
    line(x - 5, y, x + 15, y);
    line(x - 5, y + 5, x + 35, y + 5);
    line(x - 5, y + 10, x + 60, y + 10);
}