
const ComponenteTarea = () => {

    const nombre = 'Andres'
    const apellido = 'Perez'

    const listaJuegosFavoritos = ['Wow','GTA6','Resident Evil 2',]

    return (
        <div>


            <h1>{nombre}</h1>
            <h3>{apellido}</h3>
            <p>Mis juegos favoritos: {listaJuegosFavoritos}</p>
        </div>
    );
}

export default ComponenteTarea;
