var temperatures = [-11.2, 14.4, 13.0, 17.3, 21.7, 18.2, 28];
var temperatureUpperLimits = [0, 15, 20, 25, 30];
var offers = ["Ma forró csokit is árusítunk",
    "Melegedj át egy teával nálunk!",
    "Ma finom sütivel várunk",
    "Ma fagyit is kínálunk",
    "Hűsítsd le magad egy jéghideg limonádéval!"];


//temperatures array-ből kiválaszt egy elemet a nap függvényében és kiírja, mint hőmérséklet és a hozzá tartozó ajánlatot
function weatherWidget() {
    var offerText = document.querySelector(".offer-text");
    var day = document.getElementById("day");
    var dayIndex = day.options[day.selectedIndex].value;
    var temperatureDiv = document.querySelector(".temperature");
    temperatureDiv.innerHTML = temperatures[dayIndex] + " &deg;C"

    for (let i = 0; i < temperatureUpperLimits.length; i++) {
        if (temperatures[dayIndex] <= temperatureUpperLimits[i]) {
            offerText.innerHTML = offers[i];
            break;
        };
    }
}
window.onload = weatherWidget;