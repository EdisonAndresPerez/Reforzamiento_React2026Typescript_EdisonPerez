//---------------------------------------------
// 🧠 DESESTRUCTURACIÓN EN JAVASCRIPT Y TYPESCRIPT
//---------------------------------------------
// En los OBJETOS, el orden de desestructuración **no importa**.
// En los ARREGLOS, el orden de desestructuración **sí importa**.
//---------------------------------------------

// 🧍‍♂️ Ejemplo 1: Desestructuración de un objeto simple
const persona = {
    nombre: "Santiago",
    edad: 28,
    llave: "Doble Porción",
    rango: "El mejor"
};

const name = persona.nombre;
const age = persona.edad;
const range = persona.rango
console.log({name, age, range})

// Podemos cambiar el nombre de las propiedades al desestructurar:
const { nombre: santiago_marin, llave, edad, rango } = persona;


// Equivalente en JavaScript clásico:
// const nombre = persona.nombre;
// const edad = persona.edad;
// const llave = persona.llave;

console.log({ santiago_marin, edad, llave, rango });


//---------------------------------------------
// 🦸‍♂️ Ejemplo 2: Desestructuración anidada con una función
//---------------------------------------------

// Definimos una interfaz para dar tipado a los datos del héroe
interface Hero {
    llave: string;
    nombre: string;
    edad: number;
    rango: string;
}

// Función que recibe un héroe y devuelve un nuevo objeto con estructura interna
const useContextt = ({ llave, nombre, edad, rango }: Hero) => {
    return {
        keyName: llave,
        user: {
            nombre,
            edad,
        },
        rank: rango,
    };
};

// Creamos un héroe de ejemplo
const heroe: Hero = {
    llave: "Hero123",
    nombre: "Andrés",
    edad: 21,
    rango: "El programador supremo"
};



// Desestructuración anidada del resultado de la función

const { rank, keyName, user: { nombre } } = useContextt(heroe);
console.log({ rank, keyName, nombre });


//---------------------------------------------
// 🧩 CONCLUSIÓN
//---------------------------------------------
// ✅ En objetos: el orden no importa.
// ✅ Podemos cambiar nombres de propiedades al desestructurar.
// ✅ Podemos desestructurar objetos anidados fácilmente.
// ✅ Siempre debes EJECUTAR la función antes de desestructurar su resultado.
//---------------------------------------------
