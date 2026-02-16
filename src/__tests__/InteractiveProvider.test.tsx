import { render, screen, fireEvent } from '@testing-library/react'
import { InteractiveProvider, useInteractive } from '@/components/interactive/InteractiveProvider'

// Тестовый компонент для проверки контекста
function TestComponent() {
  const { isEnabled, toggleInteractive } = useInteractive()
  return (
    <div>
      <p data-testid="interactive-status">{isEnabled ? 'enabled' : 'disabled'}</p>
      <button onClick={toggleInteractive}>Toggle</button>
    </div>
  )
}

describe('InteractiveProvider', () => {
  it('по умолчанию интерактив включен', () => {
    render(
      <InteractiveProvider>
        <TestComponent />
      </InteractiveProvider>
    )
    expect(screen.getByTestId('interactive-status')).toHaveTextContent('enabled')
  })

  it('переключает состояние интерактива', () => {
    render(
      <InteractiveProvider>
        <TestComponent />
      </InteractiveProvider>
    )
    
    const button = screen.getByRole('button')
    const status = screen.getByTestId('interactive-status')
    
    expect(status).toHaveTextContent('enabled')
    
    fireEvent.click(button)
    expect(status).toHaveTextContent('disabled')
    
    fireEvent.click(button)
    expect(status).toHaveTextContent('enabled')
  })
})
