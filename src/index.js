"use strict";
document.addEventListener('DOMContentLoaded', () => {
    var _a, _b, _c;
    (_a = document.getElementById('felhasznalonev')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', (e) => {
        let bihasKarakter = false;
        let elem = e.currentTarget;
        let kiir = document.getElementById('felhasznalohiba');
        let kiir2 = document.getElementById('felhasznalohiba2');
        if (elem.value.length < 6 || elem.value.length > 30) {
            kiir.innerHTML = "Nem megfelelő karakterhossz(6-30)";
        }
        else {
            kiir.innerHTML = "";
        }
        ;
        if (elem.value.includes('&') || elem.value.includes('|') || elem.value.includes('_') || elem.value.includes('@') || elem.value.includes('{') || elem.value.includes('}') || elem.value.includes("'") || elem.value.includes('"')) {
            kiir2.innerHTML = "Hibás karakter a felhasználónévben";
        }
        else {
            kiir2.innerHTML = "";
        }
        ;
    });
    (_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.addEventListener('change', (e) => {
        let elem = e.currentTarget;
        let kiir = document.getElementById('emailhiba');
        if (!elem.value.includes('@')) {
            kiir.innerHTML = "Hibás formátum";
        }
        else {
            kiir.innerHTML = "";
        }
    });
    (_c = document.getElementById('emailujra')) === null || _c === void 0 ? void 0 : _c.addEventListener('change', (e) => {
        let elem = e.currentTarget;
        let elozo = document.getElementById('email');
        let kiir = document.getElementById('emailhiba2');
        if (elozo.value !== elem.value) {
            kiir.innerHTML = "A két email nem egyezik";
        }
        else {
            kiir.innerHTML = "";
        }
    });
});
