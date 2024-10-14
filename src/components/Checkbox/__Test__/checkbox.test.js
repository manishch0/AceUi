import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import Checkbox from '../Checkbox'

test('renders a message', () => {
  const screen = render(<Checkbox label={"apple"}></Checkbox>)
  expect(screen.getByText('apple')).toBeInTheDocument()
})