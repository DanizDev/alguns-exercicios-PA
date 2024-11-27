var idade = parseInt(prompt("Digite sua idade: "));
var possuiCNH = prompt("Você possui CNH ?, S/N");
var condicaoespecial = prompt("Você possui uma condicão especial ?, S/N");
var S; 
var N;


if(idade >= 18 && possuiCNH === "S"){
    
    alert("Pode dirigir.");

}else if(idade >= 16 && condicaoespecial === "S"){

    alert("Pode dirigir");

}else{

    alert("Voce nn pode dirigir")

}









