
interface DatosProductos {
    name: string
    agregarProducto: number
    restarProducto: number
    cantidadProducto: number

}




const ContadorProducto = ({ name, agregarProducto, cantidadProducto, restarProducto }: DatosProductos) => {


    const handleClick = () => {
        console.log(`Lediste click a ${name}`)
    }

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
            <button
                onMouseEnter={() => console.log(`Pasas por encima de ${name}`)}
            >-{restarProducto}</button>
            <button
                onClick={handleClick}
            >+{agregarProducto}</button>
            <span><strong>{cantidadProducto}</strong></span>
        </section>
    );
}

export default ContadorProducto;
