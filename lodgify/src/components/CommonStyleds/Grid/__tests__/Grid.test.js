import { render, screen } from '@testing-library/react'
import Grid from '..';
import rangeMap from '../../../../core/lib/utils/arrays/rangeMap';
import Skeleton from '../../Skeleton';


test('Grid 1 tag', async () => {
    render(<Grid>
        {rangeMap(1, (i) => (
            <Skeleton
                width="220px"
                height="280px"
                key={i}
            />
        ))}
    </Grid>)
    const items = screen.queryAllByTestId("skeleton")
    expect(items.length).toBe(1)
})
test('Grid tag', async () => {
    render(<Grid>
        {rangeMap(10, (i) => (
            <Skeleton
                width="220px"
                height="280px"
                key={i}
            />
        ))}
    </Grid>)
    const items = screen.queryAllByTestId("skeleton")
    expect(items.length).toBe(10)
})