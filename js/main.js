let kmDaPercorrere = parseInt(prompt("km da Correre"));
let userAge = parseInt(prompt("Dimmi la tua età"));

console.log(kmDaPercorrere);
console.log(userAge);

    document.getElementById("kmDaPercorrere").innerHTML = "Km Da Percorrere: " + `${kmDaPercorrere}` + "km";
    document.getElementById("userAge").innerHTML = "Età: " + `${userAge}` + " anni";


let prezzoBase = kmDaPercorrere * 0.21;
console.log("Prezzo Base: " + prezzoBase.toFixed(2) + "€");

let prezzoMinorenni = prezzoBase * (20 / 100);
console.log("Prezzo Minorenni: " + prezzoMinorenni.toFixed(2) + "€");

let prezzoOver65 = prezzoBase * (40 / 100);
console.log("Prezzo Over 65: " + prezzoOver65.toFixed(2) + "€");



if(userAge >= 65){
    document.getElementById("prezzoBase").innerHTML = "Prezzo over 65: " + `${prezzoOver65.toFixed(2)}` + "€";
} else if (userAge <= 12){
    document.getElementById("prezzoBase").innerHTML = "Prezzo Minorenni: " + `${prezzoMinorenni.toFixed(2)}` + "€";
} else {
    document.getElementById("prezzoBase").innerHTML = "Prezzo Base: " + `${prezzoBase.toFixed(2)}` + "€";
}