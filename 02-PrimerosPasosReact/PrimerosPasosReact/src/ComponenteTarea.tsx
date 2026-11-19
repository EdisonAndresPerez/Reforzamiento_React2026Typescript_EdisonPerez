
const nombre = 'Andres'
const apellido = 'Perez'

const listaJuegosFavoritos = ['Wow', 'GTA6', 'Resident Evil 2',]

const esEstudiante = true


const direccion = {
    barrio: "Viveros MZ A-210",
    ciudad: "Ibague",
    Pais: "Colombia"
}
const ComponenteTarea = () => {
    // const nombre = 'Andres'
    // const apellido = 'Perez'
    // const listaJuegosFavoritos = ['Wow', 'GTA6', 'Resident Evil 2',]
    // const esEstudiante = true
    // const direccion = {
    //     barrio: "Viveros MZ A-210",
    //     ciudad: "Ibague",
    //     Pais: "Colombia"
    // }
    return (
        <div>


            <h1>{nombre}</h1>
            <h3>{apellido}</h3>
            <p>Mis juegos favoritos: {listaJuegosFavoritos.join(', ')}</p>

            <h3>Estudiante</h3>
            <p>{esEstudiante ? "Estudia en la UNAD" : "No, esta vagando"}</p>

            <h3>Direccion</h3>
            {JSON.stringify(direccion)}
            <p></p>
        </div>
    );
}

export default ComponenteTarea;
