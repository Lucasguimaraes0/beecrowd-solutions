var input = require('fs').readFileSync('stdin', 'utf8'); //estrutura padrão para resolução desse exercício
var lines = input.split('\n'); //separa a entrada em strings

//1 - Extremamente básico


//recebe as entradas no formato string, tira o primeiro elemento da string e o retorna. É convertido em inteiro pelo parseInt
var A = parseInt(lines.shift());
var B = parseInt(lines.shift());

var X = A + B;

console.log("X = " + X);