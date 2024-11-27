//2.faça um algoritimo que receba dois valores

var nota1 = parseFloat(prompt("Digite o valor da primeira nota: "));
var nota2 = parseFloat(prompt("Digite o valor da segunda nota: "));

var media = (nota1 + nota2) / 2;

//se nota menor que 4 "reprovado"
if (media < 4) {

    alert("Reprovado");
    //se nota maior ou igual a 4 e menor ou igual a 7 "recuperação"
} else if (media >= 4 && media < 7) {

    alert("Recuperação");

    //se nota maior que 7 e menor que 10 "aprovado"
} else if (media >= 7 && media <= 10) {

    alert("Aprovado");

} else {
    //se nota maior que 10 "ganhou um bonus".
    alert("Ganhou um bônus");

}









