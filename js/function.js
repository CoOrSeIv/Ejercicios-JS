/* const suma = () => {
    let a;
    let b;
    let suma;

    a = parseInt(prompt('Escribe un número: '));
    b = parseInt(prompt('Escribe un número: '));

    suma = a + b;

    alert(`El resultado de la suma es: ${suma}`);

}

const RealizarOperaciones = () => {
    
    let suma;
    let resta;
    let multiplicacion;
    let division;
    

    let a = parseInt(prompt('Escribe un número: '));
    let b = parseInt(prompt('Escribe un otro número: '));

    suma = a + b;
    resta = a - b;
    multiplicacion = a * b;
    division = a / b;

    alert(`El resultado de la suma es: ${suma}`);
    alert(`El resultado de la resta es: ${resta}`);
    alert(`El resultado de la multiplicación es: ${multiplicacion}`);
    alert(`El resultado de la divición es: ${division}`);

}

function numeroMayor(){

    let a = parseInt(prompt('Escribe un número: '));
    let b = parseInt(prompt('Escribe un número: '));
     
    if(a == b){
        alert('Los números son iguales');
    }else if(a > b){
        alert(`El numero ${a} es mayor que numero ${b}`);
    }else{
        alert(`El numero ${a} es menor que numero ${b}`);
    }

}

function cuadradoNumero(){

    let a = parseInt(prompt('Escribe un número: '));
    
    let cuadrado = a *a;

    alert(`El cuadrado de el número ${a} es ${cuadrado}`);

}

function areaTriangulo(){
    let a = parseInt(prompt('Escribe el Area: '));
    let b = parseInt(prompt('Escribe la Altura: '));

    let area = (a * b) / 2;

    alert(`Al area del triagulo es: ${area}`);
}

function centrimetrosMetros(){
    
    let pulgada = parseInt(prompt('Escribe el valor en pulgadas: '));

    let cm = pulgada * 2.54;
    let mt = pulgada / 39.37;

    alert(`El valor ${pulgada} en centimetros es ${cm}`);
    alert(`El valor ${pulgada} en metros es ${mt}`);

} */

function kilos(){
    let kilo = 4500;
    let numeroKilo = prompt("Escriba la cantidad de Kilos a llevar: ");
    let total = kilo * numeroKilo;
    let descuento = 0;
    let totalNeto = 0;

    if(numeroKilo <= 2){
        totalNeto = total;
        alert("La cantidad de kilos de manzanas a llevar no tiene descuento");

    }else if(numeroKilo <= 5){
        descuento = total * 0.10;
        totalNeto = total - descuento;

    }else if(numeroKilo <= 10){
        descuento = total * 0.15;
        totalNeto = total - descuento;

    }else if(numeroKilo > 10){
        descuento = total * 0.20;
        totalNeto = total - descuento;
    }
    alert(`El descuento por la compra de manzanas es de $${descuento}, y su total con descuento es de $${totalNeto}`);
}