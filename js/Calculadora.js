"use strict";
let val1 = 0;
let val2 = 0;
let operacion = "";
let resultado = 0;


function resta(val1, val2) {
    return val1 - val2;
}
const divicion = (val1, val2) => {
    if (val2 == 0)
        return "error matematico";
    else
        return val1 / val2;
};
function suma(val1, val2) {
    return val1 + val2;
}
function multiplicacion(val1, val2) {
    return val1 * val2;
}
function calculate(operacion) {
    const input1 = document.getElementById("valor1");
    const input2 = document.getElementById("valor2");
    const output = document.getElementById("resultado");
    val1 = parseFloat(input1.value);
    val2 = parseFloat(input2.value);
    let resultado;
    switch (operacion) {
        case "sumar":
            resultado = suma(val1, val2);
            break;
        case "restar":
            resultado = resta(val1, val2);
            break;
        case "multiplicar":
            resultado = multiplicacion(val1, val2);
            break;
        case "dividir":
            resultado = divicion(val1, val2);
            break;
        default:
            resultado = "Operación no válida";
    }
    output.value = resultado.toString();
}
