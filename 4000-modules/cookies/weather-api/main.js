document.querySelector('button').addEventListener('click', getTemp);

function getTemp() {
    var req = new XMLHttpRequest();
    var city = document.querySelector('#cityName').value;
    var endpoint = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=YOUR_API_KEY';
    // Multiple queries are done by ?[name]=[value]&[name2]=[value2]
    
    
    // open() needs specified type of request, in this case GET and the endpoint where the request is sent to.
    req.open('GET', endpoint);
    
    // In order to get a response in JSON format, this needs to be specified. Otherwise you receive a stringified JSON.
    req.responseType = 'json';
    
    // this actually sends the previously opened request
    req.send();
    
    // catching the status code of the response
    req.addEventListener('readystatechange', function checkTemp() {
        // console.log(req.readyState); // gets the readystate (in this case 4)
        // console.log(req.status); // gets the status (in this case 200)
    
        if (req.readyState === 4 && req.status === 200) {
            // console.log(req.response) // gets the response output
    
            // console.log("Current temperature in Belgrade: " + Math.round(req.response.main.temp) + "°C") // gets the temperature from the object and rounds it up
    
            var cityValue = document.querySelector('#cityName').value;
    
            document.querySelector('#city').innerText = "The current temperature in " + cityValue + " is " + Math.round(req.response.main.temp);
            document.querySelector('#temp').innerText = Math.round(req.response.main.temp) + "°C";
        }
    });
}


