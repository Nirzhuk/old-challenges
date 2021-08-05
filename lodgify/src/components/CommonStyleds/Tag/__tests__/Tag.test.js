import { render, screen } from '@testing-library/react'
import Tag from '..';


test('Booked tag', async () => {
    const { container} = render(<Tag state="BOOKED">booked</Tag>)
    expect(container.firstChild).toMatchSnapshot()
    expect(screen.getByTestId("tag")).toHaveTextContent(`booked`)
    expect(screen.getByTestId("tag")).toHaveStyle(`background-color: #2C64B7`)

})
test('available tag', async () => {
    const { container } = render(<Tag state="AVAILABLE">unavailable</Tag>)
    expect(container.firstChild).toMatchSnapshot()
    expect(screen.getByTestId("tag")).toHaveTextContent(`unavailable`)
    expect(screen.getByTestId("tag")).toHaveStyle(`background-color: #11A960`)
})

test('unavailable tag', async () => {
    const { container } = render(<Tag state="UNAVAILABLE">available</Tag>)
    expect(container.firstChild).toMatchSnapshot()
    expect(screen.getByTestId("tag")).toHaveTextContent(`available`)
    expect(screen.getByTestId("tag")).toHaveStyle(`background-color: #E02323`)
})