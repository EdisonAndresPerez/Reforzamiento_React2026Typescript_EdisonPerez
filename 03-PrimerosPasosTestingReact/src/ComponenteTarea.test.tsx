import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import ComponenteTarea from './ComponenteTarea'

describe('ComponenteTarea', () => {
    test('Mostrar el nombre y apellido del componente', () => {

        const { container } = render(<ComponenteTarea />)
        screen.debug();

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        expect(h1?.innerHTML).toBe('Andres')
        expect(h3?.innerHTML).toContain('Perez')



    })
})