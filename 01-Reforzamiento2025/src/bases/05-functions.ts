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

interface GetUser {
 uid: string;
 username: string;
}

const getUser2  = (uid: string, username: string):GetUser => {
  return {
    uid: uid,
    username: username,
  };
};

const user2 = getUser2("ABC123", "El_papi12");
const user = getUser();

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


//mejor forma de utilizar funciones en react 
//funciones flecha 
const funcionFlechaPreferida = (name: string) => `Hola, como estas ${name}`;
console.log(funcionFlechaPreferida("Andres"))