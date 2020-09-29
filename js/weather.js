var weekday = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
d = new Date;
var measurement = 'far';
$measurement = 'far';
$(document).ready(function() {
    $measurement = 'far';
    getLocation();
});
function setIcon(status) {
    switch (status) {
        case 'Rain':
            $('#icon').append('<i class="wi wi-rain-mix"></i>');
            break;
        case 'Drizzle':
            $('#icon').append('<i class="wi wi-rain-mix"></i>');
            break;
        case 'Clear':
            $('#icon').append('<i class="wi wi-day-sunny"></i>');
            break;
        case 'Clouds':
            $('#icon').append('<i class="wi wi-cloudy"></i>');
            break;
        case 'Thunderstorm':
            $('#icon').append('<i class="wi wi-storm-showers"></i>');
            break;
        case 'Snow':
            $('#icon').append('<i class="wi wi-snow"></i>');
            break;
        case 'Mist':
            $('#icon').append('<i class="wi wi-fog"></i>');
            break;
        case 'Fog':
            $('#icon').append('<i class="wi wi-fog"></i>');
            break;
        case 'Haze':
            $('#icon').append('<i class="wi wi-smoke"></i>');
            break;
    }
}
function setCurrent(city) {
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=5ffdbfa1c66bc24fc33a167761edd1e2',
        method: 'GET',
        data: {},
        dataType: 'json',
        success: function(data) {
            $('#city').empty();
            $('#city').append(city.substring(0, city.indexOf(',')));
            $('#temp').empty();
            if ($('#icon').is(':empty')) {
                setIcon(data.weather[0].main);
            }
            if ($('#temp').is(':empty')) {
                $('#temp').append(inCel(data.main.temp));
            }
        }
    });
}
function setForecast(city, reason) {
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + ',de&mode=json&appid=5ffdbfa1c66bc24fc33a167761edd1e2',
        method: 'GET',
        data: {},
        dataType: 'json',
        success: function(data) {
            document.getElementById('forecast').innerHTML = "";
            var dayCounter = d
            for (i = 0; i <= 4; i++) {
                if (dayCounter >= weekday.length - 1) {
                    dayCounter = 0
                } else {
                    dayCounter += 1
                }
                if (data.list[i].weather[0].main !== '' && reason !== 'refresh') {
                    $('#weekdays').append(weekday[dayCounter] + '<br/>');
                    $('#icons').append(getIcon(data.list[i].weather[0].main) + '<br/>');
                }
                  $('#forecast').append(inCel(data.list[i].temp.max) + "<br/>");
            }
        }
    });
}
function inCel(value, reason) {
    if ($measurement === 'cel') {
        return Math.round(value - 273.15) + ' °C';
    } else {
        return Math.round((value - 273.15) * 1.8000 + 32.00) + ' °F';
    }
}
function getIcon(weather) {
    switch (weather) {
        case 'Rain':
            return '<i class="wi wi-rain-mix"></i>';
        case 'Drizzle':
            return '<i class="wi wi-rain-mix"></i>';
        case 'Clouds':
            return '<i class="wi wi-cloudy"></i>';
        case 'Clear':
            return '<i class="wi wi-day-sunny"></i>';
        case 'Thunderstorm':
            return '<i class="wi wi-storm-showers"></i>';
        case 'Snow':
            return '<i class="wi wi-snow"></i>';
        case 'Haze':
            return '<i class="wi wi-smoke"></i>';
        case 'Fog':
            return '<i class="wi wi-fog"></i>';
        case 'Mist':
            return '<i class="wi wi-fog"></i>';
        default:
            return '<i class="wi wi-time-1"></i>';
    }
}
function getLocation() {
  $.ajax({
        url: 'http://ip-api.com/json',
        method: 'GET',
        data: {},
        dataType: 'json',
        success: function(data) {
            $city = data.city + ',' + data.countryCode;
            setCurrent($city);
            setForecast($city);;
        }
        ,
        error: function(err) {
            console.log(err)
        }
    });
}
