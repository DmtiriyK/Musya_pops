import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

// Mock framer-motion для тестирования
jest.mock('framer-motion', () => {
  const React = require('react')
  return {
    motion: new Proxy({}, {
      get: (target, prop) => {
        return React.forwardRef(({ children, ...props }: any, ref: any) => 
          React.createElement(prop as string, { ...props, ref }, children)
        )
      }
    }),
    useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
    useTransform: () => 0,
  }
})

// Mock react-intersection-observer
jest.mock('react-intersection-observer', () => ({
  useInView: () => [null, true],
}))

describe('Hero Component', () => {
  it('рендерится без ошибок', () => {
    const { container } = render(<Hero />)
    expect(container).toBeInTheDocument()
  })

  it('отображает имя кошки', () => {
    render(<Hero />)
    expect(screen.getByText(/Муся/i)).toBeInTheDocument()
  })

  it('отображает описание', () => {
    render(<Hero />)
    expect(screen.getByText(/Красивая, вкусная, нежная/i)).toBeInTheDocument()
  })
})
