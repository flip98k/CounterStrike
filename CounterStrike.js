"use strict";

var zaehler = 0;
var startZeit;
document.getElementById("tacho").innerHTML = "Das sind 0 Klicks pro Sekunde."
document.getElementById("ZaehlerAnzeige").innerHTML = "Drück den Button!";

function buttonGedrueckt() {
    if (startZeit) {
        var zeit = (new Date().getTime() - startZeit) / 1000;
        document.getElementById("tacho").innerHTML = "Das sind " + (zaehler / zeit) + " Klicks pro Sekunde."
    } else {
        startZeit = new Date().getTime();
    }
    zaehler++;
    document.getElementById("ZaehlerAnzeige").innerHTML = "Du hast " + zaehler + " mal gedrückt";
}
