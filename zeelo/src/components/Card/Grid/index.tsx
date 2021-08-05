import React from 'react'
import rangeMap from 'core/libs/utils/rangeMap';
import Card from '..';
import Skeleton from 'components/CommonStyleds/Skeleton';
import { Book } from 'modules/books/types';


interface GridCardProps {
    data: Book[]
    onClickCard(book:Book):void;
}

const CardGrid = ({ data, onClickCard }: GridCardProps) => {
    return <>{data && data.length !== 0 ? (
        data.map((book: any) => <Card
            key={book.id}
            onClick={onClickCard}
            book={book}
             />)
    ) : (rangeMap<React.ReactNode>(20, (i) => (
        <Skeleton
            height="350px"
            key={i}
        />
    )))}</>
};

export default React.memo(CardGrid)
