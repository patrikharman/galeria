import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */
const galeriaELEM = document.getElementsByClassName("galeria")

/* írd bele az összeálíltott html képsorozatot */
galeriaELEM[0].innerHTML=htmlOsszeAllit(KEPEK);

/*2. feladat  A .nagykep divben lévő img elem megfogása */
const nagyKEPELEM = document.querySelector(".nagykep img")
/* A .nagykep div megfogása */
const nagyKEPDIVELEM=document.querySelector(".nagykep div")


/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
const galeriaKEPEK= document.querySelectorAll(".kep img")

/* eseménykezelő hozzáadása a kisképekhez, ciklussal */
for (let index = 0; index < galeriaKEPEK.length; index++) {
    galeriaKEPEK[index].addEventListener("click",function (event) {
        nagyKEPELEM.src=event.target.src;
        aktindex = index;
    });  
}





/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */




/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */
let aktindex= 0;
const jobbGOMB = document.querySelector(".bal");
const balGOMB = document.querySelector(".jobb");
jobbGOMB.addEventListener("click", function () {
    aktindex++;
    aktindex = aktindex % KEPEK.length;
    nagyKEPELEM.src = KEPEK[index].kep;
});


balGOMB.addEventListener("click", function () {
    aktindex++;
    aktindex = aktindex % KEPEK.length;
    nagyKEPELEM.src = KEPEK[index].kep;
});