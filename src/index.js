"use strict";
document.addEventListener('DOMContentLoaded', () => {
    var _a, _b, _c, _d, _e, _f, _g;
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
        if (!elem.value.includes('@') && !elem.value.includes('.com')) {
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
    (_d = document.getElementById('jelszo1')) === null || _d === void 0 ? void 0 : _d.addEventListener('change', (e) => {
        let elem = e.currentTarget;
        let kiir = document.getElementById('jelszohiba');
        let kisBetu = /[a-z]/g;
        let nagyBetu = /[A-Z]/g;
        let szam = /[0-9]/g;
        if (elem.value.match(kisBetu) && elem.value.match(nagyBetu) && elem.value.match(szam) && elem.value.length > 6) {
            kiir.innerHTML = "";
        }
        else {
            kiir.innerHTML = "Hibás formátum";
        }
    });
    (_e = document.getElementById('jelszo2')) === null || _e === void 0 ? void 0 : _e.addEventListener('change', (e) => {
        let elem = e.currentTarget;
        let elozo = document.getElementById('jelszo1');
        let kiir = document.getElementById('jelszohiba2');
        if (elozo.value !== elem.value) {
            kiir.innerHTML = "A két jelszó nem egyezik";
        }
        else {
            kiir.innerHTML = "";
        }
    });
    (_f = document.getElementById('gomb')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', (e) => {
        var _a, _b, _c, _d, _e, _f;
        let kiir = document.getElementById('gombhiba');
        if (((_a = document.getElementById('felhasznalohiba')) === null || _a === void 0 ? void 0 : _a.innerHTML) == "" && ((_b = document.getElementById('felhasznalohiba2')) === null || _b === void 0 ? void 0 : _b.innerHTML) == "" && ((_c = document.getElementById('emailhiba')) === null || _c === void 0 ? void 0 : _c.innerHTML) == "" && ((_d = document.getElementById('emailhiba2')) === null || _d === void 0 ? void 0 : _d.innerHTML) == "" && ((_e = document.getElementById('jelszohiba2')) === null || _e === void 0 ? void 0 : _e.innerHTML) == "" && ((_f = document.getElementById('jelszohiba')) === null || _f === void 0 ? void 0 : _f.innerHTML) == "") {
        }
        else {
            kiir.innerHTML = "Hibás adatok";
        }
    });
    (_g = document.getElementById('form')) === null || _g === void 0 ? void 0 : _g.addEventListener('submit', (evt) => {
        evt.preventDefault();
        window.history.back();
        alert('Sikeres regisztráció');
    });
});
