import { render, screen } from '@testing-library/react'
import Skeleton from '..';


test('Skeleton 300x300', async () => {
    render(<Skeleton width="300px" height="300px" />)
    expect(screen.getByTestId("skeleton")).toHaveStyle(`width: 300px`)
    expect(screen.getByTestId("skeleton")).toHaveStyle(`height: 300px`)
})


test('Skeleton with border 300x300', async () => {
    render(<Skeleton width="300px" height="300px" border/>)
    expect(screen.getByTestId("skeleton")).toHaveStyle(`width: 300px`)
    expect(screen.getByTestId("skeleton")).toHaveStyle(`height: 300px`)
    expect(screen.getByTestId("skeleton")).toHaveStyle(`border-radius:4px`)

})
