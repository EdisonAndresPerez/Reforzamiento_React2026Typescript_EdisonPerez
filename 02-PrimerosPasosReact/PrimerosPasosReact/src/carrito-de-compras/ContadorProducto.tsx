//IMPORTACIONES DE ARRIBA LAS DE REACT
import { useState } from "react"
//IMPORTACIONES DE TERCEROS ACA


//IMPORTACIONES PERSONALIZADAS

//IMPORTACIONES DE CSS AL FINAL 
import './ContadorProducto.css'



interface DatosProductos {
    name: string
    agregarProducto: number
    restarProducto: number
    cantidadProducto?: number

}




const ContadorProducto = ({ name, agregarProducto, cantidadProducto, restarProducto }: DatosProductos) => {
    const [contador, setContador] = useState(0)



    const handleAdd = () => {
        setContador(contador + 1)
        console.log('sumar')
    }
    const handleSubtract = () => {
        if (contador === 0) return
        setContador(contador - 1)
    }



    // const handleClick = () => {
    //     console.log(`Lediste click a ${name}`)
    // }

    return (
        <section
            className="listaItems"
        >
            <span className="textoItems">{name}</span>
            <button
                onClick={handleSubtract}
                onMouseEnter={() => console.log(`Pasas por encima de ${name}`)}
            >-{restarProducto}</button>
            <button
                onClick={handleAdd}
            >+{agregarProducto}</button>
            <span><strong>{contador}</strong></span>
        </section>
    );
}

export default ContadorProducto;
