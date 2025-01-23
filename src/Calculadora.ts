let val1:number=0;
let val2:number=0;
let operacion:string="";
let resultado:number=0;

function resta(val1:number,val2:number):number{
    return val1-val2
}

const divicion=(val1:number,val2:number):number|string=>{
    if(val2==0)
        return "error matematico"
    else
        return val1/val2;
}

function suma(val1:number,val2:number):number{
    return val1+val2
}

function multiplicacion(val1:number,val2:number):number{
    return val1*val2
}


function calculate(operacion: string): void {
    
    
    const input1 = document.getElementById("valor1") as HTMLInputElement;
    const input2 = document.getElementById("valor2") as HTMLInputElement;
    const output = document.getElementById("resultado") as HTMLInputElement;
  
    val1 = parseFloat(input1.value);
    val2 = parseFloat(input2.value);
  
    let resultado: number | string;
  
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

(window as any).calculate=calculate;


