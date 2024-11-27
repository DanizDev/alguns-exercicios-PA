var numero1 = parseFloat(prompt("Digite o valor do primeiro numero: "));
var numero2 = parseFloat(prompt("Digite o valor do segundo numero: "));
var numero3 = parseFloat(prompt("Digite o valor do terceiro numero: "));

if(numero1 === numero2 && numero2 === numero3){

    alert("O triângulo é equilátero");

}else if(numero1 === numero2 && numero2 != numero3 || numero2 === numero3 && numero3 != numero1 || numero1 === numero3 && numero3 != numero2){

    alert("O triângulo é isósceles");
    
}else{

    alert("O triângulo é escaleno");

}



