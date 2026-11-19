
interface DatosProductos {
    name: string
    agregarProducto : number
    restarProducto : number
    cantidadProducto : number

}




const ContadorProducto = ({ name, agregarProducto, cantidadProducto, restarProducto }: DatosProductos) => {
    return (
        <section
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginTop: 10
            }}
        >
            <span style={{
                width: 150,
                color: 'blue',
            }}>{name}</span>
            <button>{restarProducto}</button>
            <button>{agregarProducto}</button>
            <span>{cantidadProducto}</span>
        </section>
    );
}

export default ContadorProducto;
