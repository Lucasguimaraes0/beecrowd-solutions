var input = require('fs').readFileSync('stdin', 'utf8'); //estrutura padrão para resolução desse exercício
var lines = input.split('\n'); //separa a entrada em strings

//2-area do circulo ; raio é float com 2 casas decimais ; a deve ter precisão de 4 casas decimais;

const pi = 3.14159;
var raio = (parseFloat(lines.shift())).toFixed(2); //retorna um float com 2 casas decimais

var a = (pi * Math.pow(raio, 2)).toFixed(4); //realiza a operação matemática e retorna um float com 4 casas decimais

console.log("A=" + a);


//adicionar esse conteúdo em uma pasta já criada no github area-do-circulo