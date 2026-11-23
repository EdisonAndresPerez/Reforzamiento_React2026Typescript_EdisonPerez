import ContadorProducto from './carrito-de-compras/ContadorProducto'

interface itemsDelCarrito {
  nombreProducto: string;
  cantidadProducto: number;
}


const itemsDelCarrito: itemsDelCarrito[] = [
  { nombreProducto: 'Zelda ocarina of time Remake', cantidadProducto: 1 },
  { nombreProducto: 'GTA 6', cantidadProducto: 1 },
  { nombreProducto: 'Wow Forever', cantidadProducto: 1 },
  { nombreProducto: 'Residen evil 2', cantidadProducto: 1 }
]



const PrimerComponente = () => {


  return (
    <>
      <h1>Carrito de Compras - BunkerAmericano</h1>
      {itemsDelCarrito.map(({ nombreProducto, cantidadProducto }) => (
        //El productName en este caso nombreProducto seria el key unico para cada elemento de la lista
        //Tambien hay casos donde nosotros mismos creamos la key 
        //La key es para identificar cada elemetento de la lista y dejarlo como producto unico
        <ContadorProducto key={nombreProducto} name={nombreProducto} agregarProducto={1} cantidadProducto={cantidadProducto} restarProducto={1} />
      ))}

      {/*       
      <ContadorProducto name='Zelda ocarina of time Remake' agregarProducto={1} cantidadProducto={4} restarProducto={1} />
      <ContadorProducto name='GTA 6' agregarProducto={1} cantidadProducto={3} restarProducto={1}/>
      <ContadorProducto name='Wow Forever' agregarProducto={1} cantidadProducto={5} restarProducto={1}/>
      <ContadorProducto name='Residen evil 2' agregarProducto={1} cantidadProducto={10} restarProducto={1}/> */}



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
