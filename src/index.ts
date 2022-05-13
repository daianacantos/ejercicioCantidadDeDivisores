/* ejercicio divisores:
implemente un metodo llamado cantidadDeDivisores que reciba un numero entero y devuelva la 
cantidad de divisores. Ej , para el numero 16, sus divisores son 1, 2, 4, 8, 16. Por lo que
la respuesta deberia ser 5. 
re- utilice el metodo esmultiplo implementado para el ejercico anterior. */

let numero1: number = Number(prompt(" ingrese numero entero"));
let cantDiv = 0;
for (let i = 0; i <= numero1; i++) {
  if (numero1 % i === 0) {
    cantDiv = cantDiv + 1;
    console.log(" los divisores de" + "", numero1, "" + "son:", "" + i);
  }
}
console.log(
  " el numero:" + "",
  numero1,
  "" + "tiene" + "",
  cantDiv + "" + " divisores"
);
