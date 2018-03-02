/*Global Variables*/
var apiKey = 'a3ab5769fd0b7e46e027d5598ad1dcd7'
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
var button;
var cityInput;
var description = '';
var temperature = 0;
var humidity = 0;
var pressure = 0;

/*Setup Canvas*/
function setup(){
    var cnv = createCanvas(640, 480);
    cnv.parent('myCanvas4');
    button = select('#submit');
    cityInput = select('#city');
    button.mousePressed(queryAPI);
    noLoop();
        
}


/*Preload Data*/
function queryAPI(){
    var request = baseURL + cityInput.value() + '&apikey=' + apiKey + '&units=imperial';
    loadJSON(request, getWeatherData);
    
}

function getWeatherData(apiData){
    weatherData = apiData;
    description = weatherData.weather[0].description;
    temperature = weatherData.main.temp;
    humidity = weatherData.main.humidity;
    pressure = weatherData.main.pressure;
    print(weatherData);
    redraw();
    
}



function draw(){
    colorMode(HSB);
    background(35, 0, 60);
    if (weatherData){
    text('The current weather for ' + cityInput.value() + ' is:', 50, 50)
    text(description, 80, 70)
    text(temperature + ' F', 80, 90)
    text(humidity + '% humidity', 80, 110)
    text(pressure + ' hPa (pressure)', 80, 130)
    }  
}