import { useHistory } from "react-router-dom";
import { nanoid } from 'nanoid'
import {Button} from 'components/CommonStyleds/Button';
import { useState } from "react";
import { Book } from "modules/books/types";
import Input from "components/CommonStyleds/Input";
import styled from "styled-components";
import useForm from "hooks/useForm";
import { createMockBook } from "modules/books/mock";

const ButtonContainer = styled.div`
    display:grid;
`;

const CreatePageContainer = styled.div`
    padding: 20px;
    display: grid;
    justify-content: center;
`
const Form = styled.form`
    width: 800px;
    align-items: center;
`;

const ErrorMessage = styled.p`
color:red;`;

const CreatePage = () => {
    let history = useHistory();
    const [error, setError] = useState('')
    const goBack = () => {
        history.goBack()
    }
    const handleCreate = async (body:Book) => {
        const bodyBook = {
            ...body,
            id: nanoid()
        }
        const res = await fetch(`${process.env.REACT_APP_API_URL}/items`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyBook),
        }).catch((e) =>{
            setError('Something happens, please connect to the correct API')
            return e;
        });
        if(res.ok){
            history.push('/')
        }
    }
    const { values, handleChange, handleSubmit } = useForm<Book>({
        initialData: createMockBook(), 
        onSubmit: handleCreate
    })
    return (
        <>
            <ButtonContainer>
                <Button label="Go back to the list" onClick={goBack}></Button>
            </ButtonContainer>
            <CreatePageContainer>
 
                <h1>Create new book listing item</h1>
                <Form onSubmit={handleSubmit}>
                    <Input legend="Title" name="title" value={values.title} onChange={handleChange} />
                    <Input legend="Author" name="author" value={values.author} onChange={handleChange} />
                    <Input legend="Image" name="image" value={values.image} onChange={handleChange} />
                    <Input legend="Price" name="price" value={values.price} onChange={handleChange} />
                    <Button type="submit" label="Submit" />
                    <ErrorMessage>{error}</ErrorMessage>
                </Form>

            </CreatePageContainer>
        </>
    )
}

export default CreatePage
