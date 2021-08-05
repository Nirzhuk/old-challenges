import { render, screen } from '@testing-library/react'
import Card from '..';

test('Card Bookable', async () => {
    const houseData = {
        id: 1,
        name: 'House 1',
        image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        booked: 0,
        bookable: true
    }
    const { container } = render(<Card {...houseData} />)
    expect(container.firstChild).toMatchSnapshot()
    expect(screen.queryByText("House 1")).toHaveTextContent("House 1")
    expect(screen.getByTestId('card').querySelector('img')).toHaveAttribute('src', houseData.image)
    expect(screen.getByTestId("button")).toHaveTextContent(`Book`)
})
test('Card Booked', async () => {
    const houseData = {
        id: 1,
        name: 'House 1',
        image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        booked: 5,
        bookable: true
    }
    const { container } = render(<Card {...houseData} />)
    expect(container.firstChild).toMatchSnapshot()
    expect(screen.queryByText("House 1")).toHaveTextContent("House 1")
    expect(screen.getByTestId('card').querySelector('img')).toHaveAttribute('src', houseData.image)
    expect(screen.getByText('Booked for 5 days')).toHaveTextContent(`Booked for 5 days`)
})


test('Card Not Bookable', async () => {
    const houseData = {
        id:1,
        name:'House 1',
        image:'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        booked:0,
        bookable: false
    }
    const { container } = render(<Card {...houseData} />)
    expect(container.firstChild).toMatchSnapshot()
    expect(screen.queryByText("House 1")).toHaveTextContent("House 1")
    expect(screen.getByTestId('card').querySelector('img')).toHaveAttribute('src', houseData.image)
    expect(screen.getByTestId("button")).toHaveTextContent(`Not Bookable`)
})
