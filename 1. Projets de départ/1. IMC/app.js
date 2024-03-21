const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m

const inputHeight = document.getElementById("height");
const inputWeight = document.getElementById("weight");
const submitButton = document.getElementById("submit");
const outputImcNumber = document.getElementById("imc-number");
const outputImcText = document.getElementById("imc-text");

function calculeImc(height, weight){
    return weight / Math.pow(height/100,2);
}

function getElement(imc){
    let result
    for(element of BMIData) {
        
        if( (element.range.length == 2 && element.range[0] < imc && imc <= element.range[1]) || element.range < imc){
            result = element;
            break;
        }
    }
    return result;
}

submitButton.addEventListener("click", () => {
    const height  = inputHeight.value;
    const weight = inputWeight.value;

    if(!height || !weight) {
        outputImcNumber.innerHTML = "Wops";
        outputImcNumber.style.color = "black";
        outputImcText.innerHTML = "Remplissez correctement les inputs.";
        return;
    }

    const imc = Number(calculeImc(height,weight).toFixed(2));
    let result = getElement(imc);

    outputImcNumber.innerHTML = imc;
    outputImcNumber.style.color = result.color;
    outputImcText.innerHTML = "Résultat : " + result.name;
}, false)