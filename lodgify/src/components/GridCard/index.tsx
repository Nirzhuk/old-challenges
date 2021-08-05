import React from 'react'
import rangeMap from '../../core/lib/utils/arrays/rangeMap';
import { House } from '../../core/types/App';
import Card from '../CommonStyleds/Card';
import Skeleton from '../CommonStyleds/Skeleton';


interface GridCardProps {
    data: House[]
}

const GridCard = ({ data }: GridCardProps) => {
    return <>{data && data.length !== 0 ? (
        data.map((item: House) => <Card
            key={item.id}
            {...item} />)
    ) : (rangeMap(25, (i) => (
        <Skeleton
            width="220px"
            height="280px"
            key={i}
        />
    )))}</>
};

export default React.memo(GridCard)
