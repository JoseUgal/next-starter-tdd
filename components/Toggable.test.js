import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Toggable from './Toggable'

describe('<Toggable />', () => {
  const buttonLabel = 'show'
  let component

  beforeEach(() => {
    component = render(
            <Toggable buttonLabel={buttonLabel}>
                <div className='testDiv'>testDivContent</div>
            </Toggable>
    )
  })

  test('renders its children', () => {
    component.getByText('testDivContent')
  })

  test('renders its children but they are not visible', () => {
    const el = component.getByText('testDivContent')
    expect(el.parentNode).toHaveStyle('display: none')
  })

  test('after clicking its children must be show', () => {
    const button = component.getByText(buttonLabel)
    fireEvent.click(button)

    const el = component.getByText('testDivContent')
    expect(el.parentNode).not.toHaveStyle('display: none')
  })
})
