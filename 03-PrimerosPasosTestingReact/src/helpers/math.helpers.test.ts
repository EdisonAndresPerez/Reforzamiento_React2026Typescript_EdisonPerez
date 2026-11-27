import { describe, expect, test } from "vitest";
import { add, multiply, subtract } from "./math.helpers";

//describe => agrupa pruebas relacionadas
describe("Agrupacion de pruebas: add - subtract - multiply ", () => {
    test("Primera prueba sumar (add)", () => {
        //1 Arrange
        const a = 1;
        const b = 3;
        //2 Act
        const resultadoSuma = add(a, b);
        //3 Assert
        expect(resultadoSuma).toBe(a + b);
        console.log({ resultadoSuma });

        // if ( resultadoSuma != 4){
        //     throw new Error ('Los numeros no dan el resultado esperado')
        // }
    });

    test("Segunda prueba restar (subtract)", () => {
        //1 Arrange
        const a = 4;
        const b = 3;
        //2 Act
        const resultadoResta = subtract(a, b);
        //3 Assert
        expect(resultadoResta).toBe(a - b);
        console.log({ resultadoResta });
    });

    test("Tercera prueba restar (-subtract)", () => {
        //1 Arrange
        const a = -4;
        const b = -5;
        //2 Act
        const resultadoResta = subtract(a, b);
        //3 Assert
        expect(resultadoResta).toBe(a - b);
        console.log({ resultadoResta });
    });

    test("Cuarta prueba multiplicar (multiply)", () => {
        const a = 4;
        const b = 2;

        const resultadoMultiplicar = multiply(a, b);
        expect(resultadoMultiplicar).toBe(a * b);
        console.log({resultadoMultiplicar})
    });

    test("Quinta prueba multiplicar (-multiply)", () => {
        const a = -2;
        const b = -2;

        const resultadoMultiplicar = multiply(a, b);
        expect(resultadoMultiplicar).toBe(a * b);
        console.log({resultadoMultiplicar})
    });
});
