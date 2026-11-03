//----------------

function saludar(nombre: string) {
  return `Hola, ${nombre}`;
}
console.log(saludar("perez"));

function despedir(nombre: string) {
  return `Adiós, ${nombre}`;
}
console.log(despedir("perez"));


//funciones typadas
function saludarTypado(name: string) {
 return `hola ${name}`
}
console.log(saludarTypado("goku"))

function saludarTypado2(name: string): string {
  return `saludar vegeta ${name}`
 }
 console.log(saludarTypado2("goku"))


//------------------

//funcion tradicional
function comentar(comentario: string): string {
  return `${comentario}`;
}

//funcion flecha
const comentar2 = (comentario: string): string => {
  return `${comentario}`;
};

const funcionFlecha = (name:string): string => {
return `hola ${name}`
}

console.log(
  comentar("lorem ipsum dolor sit amet"),
  comentar2("consectetur adipiscing elit")
);

//------------------

function getUser() {
  return {
    uid: "ABC123",
    username: "El_Perezoso",
  };
}

const getUser2 = () => {
  return {
    uid: "ABC123",
    username: "El_Perezoso",
  };
};

const user = getUser();
const user2 = getUser2();

console.log(user, user2);


//------------------

const funcionCorta = (nombre: string) =>  `Hola, ${nombre}`;
console.log(funcionCorta)

const funcionCorta2 = () => ({
     uid: "ABC123",
    username: "El_flojito",
})
console.log(funcionCorta2)


//------------------

