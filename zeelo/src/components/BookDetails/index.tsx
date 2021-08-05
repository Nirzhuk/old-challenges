import React from 'react'
import styled from 'styled-components'


const StyledImage = styled.img`
display:block;
height: 450px;
`;
const BookDetailsStyled = styled.div`
    display: grid;
    justify-items: center;
`;

const BookDetails = ({book}:any) => {
    return (
        <BookDetailsStyled>
            <StyledImage alt={book.title} src={book.image}/>
            <p>{book.title} - {book.author}</p>
            <h2><strong>{book.price}€</strong></h2>
        </BookDetailsStyled>
    )
}

export default BookDetails
