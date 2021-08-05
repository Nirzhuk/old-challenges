import { useState } from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import ModalFullPage from 'components/ModalFullPage';
import CardGrid from 'components/Card/Grid';
import Grid from 'components/CommonStyleds/Grid';
import {Button} from 'components/CommonStyleds/Button';
import useBooks from 'hooks/api/useBooks';
import BookDetails from 'components/BookDetails';
import { Book } from 'modules/books/types';

const ButtonContainer = styled.div`
    display:grid;
`;


const MainPage = () => {
    let history = useHistory();

    const [openModal, setOpenModal] = useState(false)
    const [selectedBook, setSelectedBook] = useState<null | Book>(null)
    const [data] = useBooks();

    const handleModal = (book: Book) => {
        setOpenModal(true);
        setSelectedBook(book)
    }
    const handleToCreate = () => {
        history.push("/create");

    }
    return (
        <>
            <ButtonContainer><Button onClick={handleToCreate} label="Create new Book" /></ButtonContainer>
            <ModalFullPage isOpen={openModal} onClose={() => setOpenModal(false)}><BookDetails book={selectedBook} /> </ModalFullPage>
            <Grid>
                <CardGrid onClickCard={handleModal} data={data} />
            </Grid>
        </>
    )
}

export default MainPage
