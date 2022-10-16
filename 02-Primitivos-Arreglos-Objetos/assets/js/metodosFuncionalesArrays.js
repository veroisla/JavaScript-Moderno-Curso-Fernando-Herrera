//------------------ MÉTODOS FUNCIONALES DE ARRAYS ------------------- //

// MAP --> Recorrer array

let perros = ['Abi', 'India', 'Lola', 'Rufa'];

const perrosList = perros.map((nombre) => {
  console.log(nombre);
});

const capitalNames = perros.map((perro) => perro.toUpperCase());
console.log(capitalNames);

//FILTER

const cities = ['Londres', 'Madrid', 'Barcelona', 'Milan', 'Lisboa'];

const filterCities = cities
  .filter((citie) => citie.length > 6)
  .map((citie) => citie.toUpperCase());

console.log(filterCities);

//Me devuelve londres y barcelona y con el map me lo devuelve en mayúsculas

// FIND

const fruits = ['Pera', 'Limon', 'Sandia'];
const findLongFruit = fruits.find((fruit) => fruit.length > 5);
console.log(findLongFruit);
