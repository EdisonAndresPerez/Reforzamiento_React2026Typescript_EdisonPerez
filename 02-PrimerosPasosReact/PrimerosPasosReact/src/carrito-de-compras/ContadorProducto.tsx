
interface DatosProductos {
    name: string

}




const ContadorProducto = ({ name }: DatosProductos) => {
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
            <button>-1</button>
            <button>+1</button>
            <span>10</span>
        </section>
    );
}

export default ContadorProducto;
