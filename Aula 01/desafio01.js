/* Desafio 1 da primeira aula: Faça um programa que calcule o valor de uma viagem

    Você terá 3 variáveis, sendo elas:
    1- Preço do combustível;
    2- Gasto médio de combustível do carro por km;
    3- Distância em km da viagem;

*/


const precoCombustivel = 5.77;
const kmPorLitros = 10; 
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm/kmPorLitros;
const gastoDaViagem = precoCombustivel*litrosConsumidos;
console.log(gastoDaViagem.toFixed(2));                          //O toFixed vai fazer com que só tenham 2 números após a vírgula (nesse caso após o ponto)