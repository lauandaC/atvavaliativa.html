//Definindo as informações de Maria
const pesoMaria = 55; // em kg
const alturaMaria = 1.65; // em metros
const idadeMaria = 25; // em anos 
// Definindo as informações de Pedro 
const pesoPedro = 70; // em kg
const alturaPedro = 1.80; // em metros 
const idadePedro = 28; // em anos
// Função para calcular o IMC 
 function calcularIMC(peso,altura){
   return peso / (altura * altura);
 }
 // calculando o IMC de Maria 
 const imcMaria = calcularIMC(pesoMaria,alturaMaria);
 //Calculando o IMC de Pedro
 const imcPedro = calcularIMC (pesoPedro, alturaPedro);
 //Exibindo os resultados 
 alert("IMC de Maria:", imcMaria.toFixed(2));
 alert("IMC de Pedro:", imcPedro.toFixed(2));