/* 
rikelme voltz

*/

/* 

1)será empresso o valor da variavel que a pessoa atributou no código 

2)será impresso o valor 10 pois no exemplo mostra que a variavel A tem o valor de 10,variavel B tem o valor de 20
ja a variavel C tem o valor da A,que seria 10.Assim a variavel B tendo o valor da C e a A da B assim sendo impresso (A=10 B=10 C=10)  

3)O prompt serve para pedir informações pessoais como nome,idade,cidade e etc.E como no exemplo as 2 variaveis estão escrita como P e T fica mais dificil de entender o que a pessoa esta fazendo e assim podendo se perder,assim podemos mudar o nome da primeira variavel para "horas" e a segunda variavel com o nome "recebe" ou "dinheiro".
 
*/

1

let Nome;
let idade;
console.log(typeof Nome);
console.log(typeof idade);
/* 

não sei :/

*/
nome = prompt("qual seu nome");
idade = prompt("qual sua idade");
console.log("Ola", nome,"você tem",idade,"anos");

2

let sim; 
let não;
let diariamente;
sim = prompt("você tem uma cor favorita?");
não = prompt("você tem uma renda mensal?");
diariamente = prompt("você bebe suco?");
console.log("você tem uma cor favorita?", sim);
console.log("você tem uma renda mensal?",não);
console.log("você bebe suco?",diariamente);

3

let a = 10;
let b = 25;
let c;

c = a;
a = b;
b = c;

console.log(a);
console.log(b);
console.log(c);

