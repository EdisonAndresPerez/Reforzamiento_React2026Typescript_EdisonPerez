
const ContadorProducto = () => {
    return (
        <section
        style={{
            display:'flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 10
        }}
        >
            <span style={{
                width : 150,
                color : 'blue', 
            }}>Gta 6 </span>
            <button>-1</button>
            <button>+1</button>
            <span>10</span>
        </section>
    );
}

export default ContadorProducto;
