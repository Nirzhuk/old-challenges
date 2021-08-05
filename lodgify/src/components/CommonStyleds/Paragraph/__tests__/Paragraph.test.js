import { render, screen } from '@testing-library/react'
import Paragraph from '..';


test('Paragraph normal', async () => {
    const { container } = render(<Paragraph>booked</Paragraph>)
    expect(container.firstChild).toMatchSnapshot()
    expect(screen.getByText("booked")).toHaveStyle(`color:black`)

})

test('Paragraph green', async () => {
    const { container } = render(<Paragraph color="#11A960">booked</Paragraph>)
    expect(container.firstChild).toMatchSnapshot()
    expect(screen.getByText("booked")).toHaveStyle(`color:#11A960`)
})
test('Paragraph big size', async () => {
    const { container } = render(<Paragraph size="24px" color="#11A960">booked</Paragraph>)
    expect(container.firstChild).toMatchSnapshot()
    expect(screen.getByText("booked")).toHaveStyle(`color:#11A960`)
    expect(screen.getByText("booked")).toHaveStyle(`font-size:24px`)
})