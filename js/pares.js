const PAR = document.getElementById("par");
const RESULTADO = document.getElementById("resultado");

function calcular() {
    let parNac = parseInt(PAR.value);

    if (isNaN(parNac)) {
        RESULTADO.innerHTML = "Por favor, introduce un número válido.";
        return;
    }

    let esPar = parNac % 2 === 0;

    let num = parNac;
    let entero = Math.floor(num); // 12

    RESULTADO.innerHTML = `El número introducido es: <b>${parNac}</b> y es <b>${esPar ? "par" : "impar"}</b>.`;
    console.log(RESULTADO);
}