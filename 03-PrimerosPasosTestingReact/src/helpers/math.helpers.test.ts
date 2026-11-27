import { test } from "vitest";
import { add } from "./math.helpers";

test('Primera prueba', () => {
    console.log('Hola mundooo')

    const resultadoSuma = add(2,2);
    console.log({resultadoSuma})

    if ( resultadoSuma != 4){
        throw new Error ('Los numeros no dan el resultado esperado')
    }

})