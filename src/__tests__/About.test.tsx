import { render, screen } from '@testing-library/react'
import About from '@/components/About'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}))

// Mock react-intersection-observer
jest.mock('react-intersection-observer', () => ({
  useInView: () => [null, true],
}))

describe('About Component', () => {
  it('отображает заголовок секции', () => {
    render(<About />)
    expect(screen.getByText(/О нашей звезде/i)).toBeInTheDocument()
  })

  it('отображает имя кошки', () => {
    render(<About />)
    expect(screen.getByText(/Муся/i)).toBeInTheDocument()
  })

  it('отображает информацию о возрасте', () => {
    render(<About />)
    expect(screen.getByText(/5 лет/i)).toBeInTheDocument()
  })

  it('отображает породу', () => {
    render(<About />)
    expect(screen.getByText(/Бомжара с мусорки/i)).toBeInTheDocument()
  })

  it('отображает все черты характера', () => {
    render(<About />)
    expect(screen.getByText(/Бесячая/i)).toBeInTheDocument()
    expect(screen.getByText(/Ленивая/i)).toBeInTheDocument()
    expect(screen.getByText(/Толстая/i)).toBeInTheDocument()
  })
})
