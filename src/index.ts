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

        if(!elem.value.includes('@')){
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

    





});