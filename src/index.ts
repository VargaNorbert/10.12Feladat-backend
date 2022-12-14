document.addEventListener('DOMContentLoaded',() => {

    document.getElementById('felhasznalonev')?.addEventListener('change',(e) : void=>{
        let bihasKarakter: boolean = false;

        let elem =  e.currentTarget as HTMLInputElement;
        let kiir =  document.getElementById('felhasznalohiba') as HTMLParagraphElement;

        let kiir2 =  document.getElementById('felhasznalohiba2') as HTMLParagraphElement;

        if(elem.value.length < 6 ||  elem.value.length > 30){
            kiir.innerHTML = "Nem megfelelő karakterhossz(6-30)" ;
        }else{
            kiir.innerHTML = "";
        };

        if(elem.value.includes('&') || elem.value.includes('|') || elem.value.includes('_') || elem.value.includes('@') || elem.value.includes('{') || elem.value.includes('}')|| elem.value.includes("'")|| elem.value.includes('"')){
            kiir2.innerHTML = "Hibás karakter a felhasználónévben";
        }else{
            kiir2.innerHTML = "";
        };
    });

    document.getElementById('email')?.addEventListener('change',(e)=>{

        let elem =  e.currentTarget as HTMLInputElement;
        let kiir =  document.getElementById('emailhiba') as HTMLParagraphElement;

        if(!elem.value.includes('@')&&!elem.value.includes('.com')){
            kiir.innerHTML = "Hibás formátum";
        }else{
            kiir.innerHTML = "";
        }


    });

    document.getElementById('emailujra')?.addEventListener('change',(e)=>{

        let elem =  e.currentTarget as HTMLInputElement;
        let elozo = document.getElementById('email') as HTMLInputElement;
        let kiir =  document.getElementById('emailhiba2') as HTMLParagraphElement;

        if(elozo.value !== elem.value){
            kiir.innerHTML="A két email nem egyezik"
        }
        else{
            kiir.innerHTML = "";
        }
    });

    document.getElementById('jelszo1')?.addEventListener('change',(e)=>{
        let elem =  e.currentTarget as HTMLInputElement;
        let kiir =  document.getElementById('jelszohiba') as HTMLParagraphElement;

        let kisBetu= /[a-z]/g;
        let nagyBetu=/[A-Z]/g;
        let szam=/[0-9]/g;

        if(elem.value.match(kisBetu)&&elem.value.match(nagyBetu)&&elem.value.match(szam)&&elem.value.length>6){
            kiir.innerHTML = "";
        }else{
            kiir.innerHTML = "Hibás formátum"  
        }
    });

    document.getElementById('jelszo2')?.addEventListener('change',(e)=>{

        let elem =  e.currentTarget as HTMLInputElement;
        let elozo = document.getElementById('jelszo1') as HTMLInputElement;
        let kiir =  document.getElementById('jelszohiba2') as HTMLParagraphElement;

        if(elozo.value !== elem.value){
            kiir.innerHTML="A két jelszó nem egyezik"
        }
        else{
            kiir.innerHTML = "";
        }
    });


    document.getElementById('gomb')?.addEventListener('click', (e)=>{

        let kiir =  document.getElementById('gombhiba') as HTMLParagraphElement;

        if(document.getElementById('felhasznalohiba')?.innerHTML==""&&document.getElementById('felhasznalohiba2')?.innerHTML==""&&document.getElementById('emailhiba')?.innerHTML==""&&document.getElementById('emailhiba2')?.innerHTML==""&&document.getElementById('jelszohiba2')?.innerHTML==""&&document.getElementById('jelszohiba')?.innerHTML==""){
           
        }else{
            kiir.innerHTML="Hibás adatok"
        }
    });

    document.getElementById('form')?.addEventListener('submit',(evt)=>{
        evt.preventDefault();
        window.history.back();
        alert('Sikeres regisztráció');
    });

    





});