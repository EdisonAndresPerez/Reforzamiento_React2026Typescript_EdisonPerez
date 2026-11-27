import { expect, test } from "vitest";
import { add } from "./math.helpers";

test('Primera prueba', () => {


    //1 Arrange
    const a = 1;
    const b = 3;
    //2 Act
    const resultadoSuma = add(a, b);
    //3 Assert
    console.log({resultadoSuma})
    expect(resultadoSuma).toBe(a + b)
    
    // if ( resultadoSuma != 4){
    //     throw new Error ('Los numeros no dan el resultado esperado')
    // }

})