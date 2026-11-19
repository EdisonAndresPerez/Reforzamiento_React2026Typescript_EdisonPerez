
const ComponenteTarea = () => {

    const nombre = 'Andres'
    const apellido = 'Perez'

    const listaJuegosFavoritos = ['Wow','GTA6','Resident Evil 2',]

    const esEstudiante = true


    return (
        <div>


            <h1>{nombre}</h1>
            <h3>{apellido}</h3>
            <p>Mis juegos favoritos: {listaJuegosFavoritos.join(', ')}</p>
            
            <h3>Estudiante</h3>
            <p>{esEstudiante  ? "Estudia en la UNAD" : "No, esta vagando"}</p>
        </div>
    );
}

export default ComponenteTarea;
