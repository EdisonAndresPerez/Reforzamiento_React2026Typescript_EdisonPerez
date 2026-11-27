import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";

import ComponenteTarea from './ComponenteTarea'

describe('ComponenteTarea', () => {
    test('Mostrar el nombre y apellido del componente', () => {
        
        const componente = render(<ComponenteTarea/>)
        screen.debug();


    })
})