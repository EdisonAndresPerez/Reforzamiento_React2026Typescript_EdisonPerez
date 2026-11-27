import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import PrimerComponente from './PrimerComponente'

describe('PrimerComponente', () => {
  it('muestra el carrito y sus productos', () => {
    render(<PrimerComponente />)

    expect(screen.getByRole('heading', { name: /Carrito de Compras/i })).toBeInTheDocument()
    expect(screen.getByText('GTA 6')).toBeInTheDocument()
    expect(screen.getAllByRole('button')).toHaveLength(8)
  })
})
