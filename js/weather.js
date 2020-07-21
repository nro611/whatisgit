var temperatures = [11.2, 14.4, 13.0, 17.3, 16.9, 18.2, 16.5];


//temperatures array-ből kiválaszt egy elemet a nap függvényében és kiírja, mint hőmérséklet.
function weatherWidget() {
    var day = document.getElementById("day");
    var dayIndex = day.options[day.selectedIndex].value;
    var temperatureDiv = document.querySelector(".temperature");
    temperatureDiv.innerHTML = temperatures[dayIndex] + " &deg;C"
}
window.onload = weatherWidget;