// Used for compilation with Browserify. However, it is broken (for some reason, one of the packages are not being imported
// properly). I manually fix this for now, but I would very much like to fix this with weather-js or browserify.
// browserify scripts/weather.js -o bundle.js

var weather = require('weather-js');

function choosePic () {

    var images = ['jvJVefx.jpg', 'A0aDza8.jpg', 'hLE28KQ.jpg', 'EeE9J.jpg', 'aZScqx6.jpg', 'PsDD5FK.jpg', 'AhgFudA.jpg', 'Y7tO223.jpg', 'GeljQRN.jpg', 'hZ52wIX.jpg', 'paiv3jU.jpg', 'd0k128jwxi101.jpg', 'BQ6KjPa.jpg', 'kWr2TCv.jpg', 'xtRaaY5.jpg', 'rEOPhmL.jpg', 'NO8ccpA.jpg', 'ra6M5zu.jpg', '6mnK4D0.jpg', '8Bq53xj.jpg', '1Qcwduq.jpg', 'f0ghN9G.jpg', 'Xik4G4c.jpg', 'Fq14Fsk.jpg', 'ti9jKcI.jpg', 'w7g4Tex.jpg', 'cgVCtwd.jpg', 'vnHhC5m.jpg', 'vBcVD4o.jpg', 'QqffsPx.jpg', 'q6Zfn7p.jpg', 'vwVqjMP.jpg', 'hbbpjec.jpg', 'AW16Y0i.jpg', 'YWMo1IJ.jpg',  'q5u0Ngd.jpg', 'L6w1YUN.jpg', 'UZH8X4x.jpg',  'afBGhhB.jpg', 'X0sd0Ho.jpg', '7SqL0BC.jpg',  '2dGXJp7.jpg', '3Dap2EL.jpg', 'sDsSu0m.jpg', 'hs6EUln.jpg', 'oSiYCN3.jpg', 'unbenannt3yywl.jpg', 'tqt2ewnd9m901.jpg', 'TNAG0Po.jpg', '2rQoBh8.jpg', 'GLi3zS6.jpg', 'SanFrancisco.jpg', 'VebP6Ol.jpg', '.Z7FLI6v.jpg.icloud', '5bKd1fd.jpg', 'uENexRC.jpg', 'eexbpm62e1601.jpg', 'QiUF7XB.jpg', 'GGYgJ0G.jpg', 'mQUd1tO.jpg', 'h8R5xMB.jpg', 'IW7I8dT.jpg', 'AdF1fVN.jpg', 'vQA6IsA.jpg', 'Spaceshuttle-Trough-Clouds.jpg']

    var randomNum = Math.floor(Math.random() * images.length);
    document.getElementById("centerImage").src = "WallPapers/" + images[randomNum];
}

function getWeather () {
    weather.find({search: 'Vancouver, BC', degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);

        // ADD ALERT FUNCTIONALIFY
        var skycode = result[0].current.skycode;
        var skytext = result[0].current.skytext;
        var temperature = result[0].current.temperature;
        var wind = result[0].current.winddisplay;

        var iconTable = {
            '31': 'wi-stars',
            '32': 'wi-day-sunny',
            '5': 'wi-rain-mix',
            '6': 'wi-rain-mix',
            '7': 'wi-sleet',
            '8': 'wi-snowflake-cold',
            '9': 'wi-showers',
            '11': 'wi-rain',
            '12': 'wi-rain',
            '13': 'wi-snow',
            '14': 'wi-snow',
            '16': 'wi-snow',
            '42': 'wi-snow',
            '43': 'wi-snow',
            '15': 'wi-snow-wind',
            '18': 'wi-showers',
            '40': 'wi-showers',
            '19': 'wi-dust',
            '20': 'wi-fog',
            '21': 'wi-smog',
            '22': 'wi-smoke',
            '23': 'wi-strong-wind',
            '24': 'wi-strong-wind',
            '3': 'wi-thunderstorm',
            '4': 'wi-thunderstorm',
            '17': 'wi-thunderstorm',
            '35': 'wi-thunderstorm',
            '25': 'wi-snowflake-cold',
            '26': 'wi-cloudy',
            '27': 'wi-night-partly-cloudy',
            '29': 'wi-night-partly-cloudy',
            '33': 'wi-night-partly-cloudy',
            '28': 'wi-day-cloudy',
            '30': 'wi-day-cloudy',
            '34': 'wi-day-cloudy',
            '36': 'wi-hot',
            '37': 'wi-thunderstorm',
            '38': 'wi-thunderstorm',
            '39': 'wi-showers',
            '41': 'wi-snow-wind',
            '45': 'wi-night-showers',
            '46': 'wi-night-snow',
            '47': 'wi-night-thunderstorm',
        }

        if (skycode in iconTable) {
            var icon = iconTable[skycode];
        } else {
            var icon = "wi-train";
        }

        console.log(skycode); console.log(temperature); console.log(skytext); console.log(wind);

        document.getElementById("weathericon").className = 'wi '+icon;
        document.getElementById("temperature").innerHTML = temperature + " &deg;C";
        document.getElementById("skytext").innerHTML     = skytext;
        document.getElementById("wind").innerHTML        = wind;
    });
}

function mainFunc () {
    getWeather();
    choosePic();
}

window.onload = mainFunc;
