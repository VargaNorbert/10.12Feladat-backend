(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{var e,n,t,l,d,i,a;null===(e=document.getElementById("felhasznalonev"))||void 0===e||e.addEventListener("change",(e=>{let n=e.currentTarget,t=document.getElementById("felhasznalohiba"),l=document.getElementById("felhasznalohiba2");n.value.length<6||n.value.length>30?t.innerHTML="Nem megfelelő karakterhossz(6-30)":t.innerHTML="",n.value.includes("&")||n.value.includes("|")||n.value.includes("_")||n.value.includes("@")||n.value.includes("{")||n.value.includes("}")||n.value.includes("'")||n.value.includes('"')?l.innerHTML="Hibás karakter a felhasználónévben":l.innerHTML=""})),null===(n=document.getElementById("email"))||void 0===n||n.addEventListener("change",(e=>{let n=e.currentTarget,t=document.getElementById("emailhiba");n.value.includes("@")||n.value.includes(".com")?t.innerHTML="":t.innerHTML="Hibás formátum"})),null===(t=document.getElementById("emailujra"))||void 0===t||t.addEventListener("change",(e=>{let n=e.currentTarget,t=document.getElementById("email"),l=document.getElementById("emailhiba2");t.value!==n.value?l.innerHTML="A két email nem egyezik":l.innerHTML=""})),null===(l=document.getElementById("jelszo1"))||void 0===l||l.addEventListener("change",(e=>{let n=e.currentTarget,t=document.getElementById("jelszohiba");n.value.match(/[a-z]/g)&&n.value.match(/[A-Z]/g)&&n.value.match(/[0-9]/g)&&n.value.length>6?t.innerHTML="":t.innerHTML="Hibás formátum"})),null===(d=document.getElementById("jelszo2"))||void 0===d||d.addEventListener("change",(e=>{let n=e.currentTarget,t=document.getElementById("jelszo1"),l=document.getElementById("jelszohiba2");t.value!==n.value?l.innerHTML="A két jelszó nem egyezik":l.innerHTML=""})),null===(i=document.getElementById("gomb"))||void 0===i||i.addEventListener("click",(e=>{var n,t,l,d,i,a;let u=document.getElementById("gombhiba");""==(null===(n=document.getElementById("felhasznalohiba"))||void 0===n?void 0:n.innerHTML)&&""==(null===(t=document.getElementById("felhasznalohiba2"))||void 0===t?void 0:t.innerHTML)&&""==(null===(l=document.getElementById("emailhiba"))||void 0===l?void 0:l.innerHTML)&&""==(null===(d=document.getElementById("emailhiba2"))||void 0===d?void 0:d.innerHTML)&&""==(null===(i=document.getElementById("jelszohiba2"))||void 0===i?void 0:i.innerHTML)&&""==(null===(a=document.getElementById("jelszohiba"))||void 0===a?void 0:a.innerHTML)||(u.innerHTML="Hibás adatok")})),null===(a=document.getElementById("form"))||void 0===a||a.addEventListener("submit",(e=>{e.preventDefault(),window.history.back(),alert("Sikeres regisztráció")}))}))})();