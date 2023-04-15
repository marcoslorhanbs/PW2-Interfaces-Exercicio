import {arraysContemMesmasStrings, verificarArrays, matrizContemMesmosArrays} from './exportModule'
import {compareArrays, descreveCidade, Restaurante, agrupaRestaurantes} from './exportModule'
let exercicio1 =  arraysContemMesmasStrings(['casa', 'carro', 'moto'], ['casa', 'moto', 'carro'])
console.log(exercicio1)

let exercicio2 = verificarArrays(['casa', 'carro', 'moto'], ['casa', 'moto', 'carro']);
console.log(exercicio2);

//Exercicio3
const matriz1 = [['casa', 'carro'], ['moto', 'ônibus']];
const matriz2 = [['moto', 'ônibus'], ['casa', 'carro']];
const matriz3 = [['casa', 'carro'], ['moto', 'bicicleta']];
console.log(matrizContemMesmosArrays(matriz1, matriz2)); // true
console.log(matrizContemMesmosArrays(matriz1, matriz3)); // false

//Exercicio4
const a: string[][] = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
  ];
  
  const b: string[][] = [
    ["a", "b", "c"],
    ["d", "x", "f"],
    ["g", "h"]
  ];
  
const result = compareArrays(a, b);
console.log(result);

//Exercicio5
let cidade = descreveCidade({"nome":"Cajazeiras", "alcunha":"A cidade que ensinou a Paraiba a ler", "coordenadas":{"latitude":[52,32,4], "longitude":[32,40,5]}})
console.log(cidade)

//Exercicio6

const restaurantes: Restaurante[] = [
    { cidade: "Cajazeiras", name: "Burgdega" },
    { cidade: "Sousa", name: "Dino's" },
    { cidade: "Cajazeiras", name: "Avenida" },
];
  
const restaurantesAgrupados = agrupaRestaurantes(restaurantes);
  
console.log(restaurantesAgrupados);