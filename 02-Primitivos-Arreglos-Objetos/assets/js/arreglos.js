// // ARRAYS/LISTAS

// const list = ['Pera', 'Limon', 'Cereza'];
// console.log({ list });
// console.log(list[0]);

// let listaVariada = [
//   true,
//   123,
//   'Fernando',
//   1 + 3,
//   ['India', 'Abi', 'Lola', 'Rufa', ['Perro', 'Gato']],
// ];

// console.log({ listaVariada });

// //Me devuelve Lola
// console.log(listaVariada[4][2]);

// //Me devuelve perro
// console.log(listaVariada[4][4][0]);

// --------------------- MÉTODOS DE ARRAYS ---------------- //

let nombres = ['Vero', 'Laura', 'Maria', 'Lucia'];
console.log(nombres.length);

let ultimoElemento = nombres[nombres.length - 1];

//FOREACH --> Recorrer array

nombres.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice });
});

//PUSH --> Añadir nuevo item al final del array

let addName = nombres.push('Dani');
console.log({ addName, nombres });

//UNSHIFT --> Añade item al comienzo del array

let nuevoItemComienzo = nombres.unshift('Pedro');
console.log({ nuevoItemComienzo, nombres });

//POP --> Borrar último elemento

let deleteLastItem = nombres.pop();
console.log({ deleteLastItem, nombres });

// SPLICE --> Borrar elemento elegido
// Pasar dos parámetros, el número donde se encuentra el elemento, y cuantos elementos quiero borrar

letDeleteSelectedItem = nombres.splice(3, 1);
console.log({ letDeleteSelectedItem, nombres });

//INDEXOF --> Posición en la que se encuentra el item en el array
// Si retorna -1, quiere decir que no encontró el item

let knowPositionItem = nombres.indexOf('Vero');
console.log(knowPositionItem);
