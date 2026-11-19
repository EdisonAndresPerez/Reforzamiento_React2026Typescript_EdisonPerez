
const ContadorProducto = () => {
    return (
        <section
        style={{
            display:'flex',
            alignItems: 'center',
            gap: 10
        }}
        >
            <button>+1</button>
            <button>-1</button>
            <span>10</span>
        </section>
    );
}

export default ContadorProducto;
