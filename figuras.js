//codigo cuadrado
console.group("cuadrados");
const ladoCuadrado = 5;
console.log("los lados del cuadrado miden:" + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
//fin codigo cuadrado

//codigo triangulo

console.groupEnd();

console.group("trinagulo");

const ladroTriangulo1 = 6;
const ladroTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(
    "los lados del triangulo miden:" 
     + ladroTriangulo1 
     + "cm," 
     + ladroTriangulo2 
     + "cm "
     + baseTriangulo 
     + "  cm");


console.log("la altura del triangulo es:" + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura){
return (base * altura) / 2;
} 
//fin codigo triangulo

console.groupEnd();


//codigo del circulo
console.group("circulo");

function diametroCirculo(radio) {
    return radio*2;
}

const PI = Math.PI


function perimetroCirculo(radio){

    const diametro = diametroCirculo(radio);
    return diametro * PI;
    } 


function areaCirculo(radio){
return (radio * radio) * PI;
} 


console.groupEnd();



//inicio con html

//funciones para el cuadrado

function calcularPerimetroCuadrado(){
   const input = document.getElementById("imputCuadrado");
   const value = input.value;

   const perimetro = perimetroCuadrado(value);
   document.getElementById("resultadoPerimetroCuadrado").innerHTML = "el perimetro del cuadrado es: " +  perimetro ;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("imputCuadrado");
    const value = input.value;
 
    const area = areaCuadrado(value);
    document.getElementById("resultadoAreaCuadrado").innerHTML = "el area del cuadrado es: " +  area ;
}

//funciones para el triangulo

function calculaPerimetroTriangulo() {
    const input1 = document.getElementById("imputLado1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("imputLado2");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("imputBase");
    const value3 = Number(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    document.getElementById("resultadoPerimetroTriangulo").innerHTML = "el perimetro del triangulo es: " + perimetro;
}

function calculaAreaTriangulo() {
 const input1 = document.getElementById("imputBase");
 const value1 = Number(input1.value);

 const input2 = document.getElementById("imputAltura");
 const value2 = Number(input2.value);

 const area = areaTriangulo(value1, value2);

 document.getElementById("resultadoAreaTriangulo").innerHTML = "el area del triangulo es: " + area;

}

//funciones para el circulo

function calculaAreaCirculo() {
    const input = document.getElementById("input");
    const value = Number(input.value);

    const area = areaCirculo(value);
    document.getElementById("resultadoAreaCirculo").innerHTML = "el area del circulo es: " +  area ;

}

function calculaPerimetroCirculo() {
    const input = document.getElementById("input");
    const value = Number(input.value);

    const perimetro =  perimetroCirculo(value);
    document.getElementById("resultadoPerimetroCirculo").innerHTML = "el perimetro del irculo es: " + perimetro;
}
