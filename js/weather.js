var offerText = document.querySelector(".offer-text");
var temperatures = [-11.2, 14.4, 13.0, 17.3, 21.7, 18.2, 28];
var temperatureUpperLimits = [0, 15, 20, 25, 30];
var offers = ["Ma forró csokit is árusítunk",
    "Melegedj át egy teával nálunk!",
    "Ma finom sütivel várunk",
    "Ma fagyit is kínálunk",
    "Hűsítsd le magad egy jéghideg limonádéval!"];


//temperatures array-ből kiválaszt egy elemet a nap függvényében és kiírja, mint hőmérséklet és a hozzá tartozó ajánlatot
function weatherWidget() {
    var day = document.getElementById("day").selectedIndex;
    var temperatureDiv = document.querySelector(".right");
    temperatureDiv.innerHTML = temperatures[day] + " &deg;C";

    for (let i = 0; i < temperatureUpperLimits.length; i++) {
        if (temperatures[day] <= temperatureUpperLimits[i]) {
            offerText.innerHTML = offers[i];
            break;
        };
    }
}

function minTempStats() {
    var minTemp = temperatures.length != 0 ? temperatures[0] : 0;
    var minText = document.querySelector(".min-temp");
    for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] < minTemp) {
            minTemp = temperatures[i];
        }
    }
    minText.innerHTML = "Minimum: " + minTemp + " &deg;C";
}


function maxTempStats() {
    var maxTemp = temperatures.length != 0 ? temperatures[0] : 0;
    var maxText = document.querySelector(".max-temp");
    for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] > maxTemp) {
            maxTemp = temperatures[i];
        }
    }
    maxText.innerHTML = "Maximum: " + maxTemp + " &deg;C";
}

function avgTempStats() {
    var avgTemp = 0;
    var avgText = document.querySelector(".avg-temp");
    for (let i = 0; i < temperatures.length; i++) {
        avgTemp += temperatures[i];
        }
    avgTemp = avgTemp / temperatures.length;
    avgText.innerHTML = "Átlag: " + avgTemp.toFixed(2) + " &deg;C";
}




window.onload = weatherWidget;