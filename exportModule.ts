export function arraysContemMesmasStrings(a: string[], b: string[]): boolean {
    // Verifica se os arrays têm o mesmo tamanho
    if (a.length !== b.length) {
      return false;
    }
  
    // Verifica se todos os elementos de 'a' estão em 'b'
    for (let i = 0; i < a.length; i++) {
      if (!b.includes(a[i])) {
        return false;
      }
    }
  
    // Verifica se todos os elementos de 'b' estão em 'a'
    for (let i = 0; i < b.length; i++) {
      if (!a.includes(b[i])) {
        return false;
      }
    }
  
    // Se chegou até aqui, os arrays têm os mesmos elementos
    return true;
  }
  
  //let teste =  arraysContemMesmasStrings(['casa', 'carro', 'moto'], ['casa', 'moto', 'carro'])
  //console.log(teste)
  
export  function verificarArrays(a: string[], b: string[]): (string | undefined)[] | undefined {
    // Verifica se os arrays têm o mesmo tamanho
    if (a.length !== b.length) {
      return undefined;
    }
  
    const resultado: (string | undefined)[] = [];
  
    // Verifica se todos os elementos de 'a' estão em 'b' e vice-versa
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) {
        resultado.push(a[i]);
      } else {
        resultado.push(undefined);
      }
    }
  
    return resultado;
  }
  
  //let teste = verificarArrays(['casa', 'carro', 'moto'], ['casa', 'moto', 'carro']);
  //console.log(teste);

export  function matrizContemMesmosArrays(a: string[][], b: string[][]): boolean {
    // Verifica se as matrizes têm o mesmo tamanho
    if (a.length !== b.length) {
      return false;
    }
  
    // Verifica se todos os arrays em 'a' estão em 'b'
    for (let i = 0; i < a.length; i++) {
      if (!b.some((array) => array.every((value, index) => value === a[i][index]))) {
        return false;
      }
    }
  
    // Verifica se todos os arrays em 'b' estão em 'a'
    for (let i = 0; i < b.length; i++) {
      if (!a.some((array) => array.every((value, index) => value === b[i][index]))) {
        return false;
      }
    }
  
    // Se chegou até aqui, as matrizes têm os mesmos arrays
    return true;
  }

  /*
    const matriz1 = [['casa', 'carro'], ['moto', 'ônibus']];
    const matriz2 = [['moto', 'ônibus'], ['casa', 'carro']];
    const matriz3 = [['casa', 'carro'], ['moto', 'bicicleta']];
    console.log(matrizContemMesmosArrays(matriz1, matriz2)); // true
    console.log(matrizContemMesmosArrays(matriz1, matriz3)); // false
 
   */


   export function compareArrays(a: string[][], b: string[][]): (string[] | undefined)[] {
      const result: (string[] | undefined)[] = [];
    
      for (let i = 0; i < a.length; i++) {
        if (a[i].length !== b[i].length) {
          result.push(undefined);
        } else {
          const temp: (string | undefined)[] = [];
    
          for (let j = 0; j < a[i].length; j++) {
            if (a[i][j] === b[i][j]) {
              temp.push(a[i][j]);
            } else {
              temp.push(undefined);
            }
          }
    
          result.push(temp);
        }
      }
    
      return result;
    }
interface Coordenadas {
  latitude: [number, number, number];
  longitude: [number, number, number];
}

interface Cidade {
  nome: string;
  alcunha: string;
  coordenadas: Coordenadas;
}

export function descreveCidade(cidade: Cidade): string {
  const latitude = cidade.coordenadas.latitude.join("° ");
  const longitude = cidade.coordenadas.longitude.join("° ");

  return `${cidade.nome} \n* "${cidade.alcunha}"\n* Localizada em ${latitude}'S ${longitude}'O`;
}

export interface Restaurante {
  cidade: string;
  name: string;
}

export function agrupaRestaurantes(restaurantes: Restaurante[]): Record<string, string[]> {
  const restaurantesPorCidade: Record<string, string[]> = {};

  for (const restaurante of restaurantes) {
    const { cidade, name } = restaurante;

    if (!restaurantesPorCidade[cidade]) {
      restaurantesPorCidade[cidade] = [name];
    } else {
      restaurantesPorCidade[cidade].push(name);
    }
  }

  return restaurantesPorCidade;
}
