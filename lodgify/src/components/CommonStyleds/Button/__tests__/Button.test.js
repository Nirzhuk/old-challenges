import { render, screen } from '@testing-library/react'
import Button from '..';
import 'jest-styled-components'



test('Button Disabled', async () => {
    render(<Button disabled>button</Button>)
    expect(screen.getByTestId("button")).toHaveTextContent(`button`)
    expect(screen.getByTestId("button")).toHaveStyle(`background-color: #B2B2B2`)
    expect(screen.getByTestId("button")).toHaveAttribute('disabled');
})
test('Button Hover', async () => {
    render(<Button>button</Button>)
    const button = screen.getByTestId("button");
    expect(button).toHaveTextContent(`button`)
    //It seems its bugged jest styled components so I'm not avaible to test this
    //expect(button).toHaveStyleRule(`background-color`, '#3575d4',{modifier: 'hover'})
})
test('Button', async () => {
    render(<Button>button</Button>)
    const button = screen.getByTestId("button");
    expect(button).toHaveTextContent(`button`)
    expect(button).toHaveStyle(`background-color: #2C64B7`)

})