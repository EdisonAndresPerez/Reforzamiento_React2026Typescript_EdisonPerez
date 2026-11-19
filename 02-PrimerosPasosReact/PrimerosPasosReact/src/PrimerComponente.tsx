import ContadorProducto from './carrito-de-compras/ContadorProducto'





const PrimerComponente = () => {


  return (
    <>
      <h1>Carrito de Compras - BunkerAmericano</h1>
      <ContadorProducto name='Zelda ocarina of time Remake' agregarProducto={1} cantidadProducto={4} restarProducto={1} />
      <ContadorProducto name='GTA 6' agregarProducto={1} cantidadProducto={3} restarProducto={1}/>
      <ContadorProducto name='Wow Forever' agregarProducto={1} cantidadProducto={5} restarProducto={1}/>
      <ContadorProducto name='Residen evil 2' agregarProducto={1} cantidadProducto={10} restarProducto={1}/>



      {/* <div>
        Hola Este es el primer componente
        <p>bienvenidos</p>
      </div>

      <div>
        <button>Entrar</button>
      </div> */}
    </>
  );
};

export default PrimerComponente;
