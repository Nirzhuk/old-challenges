import { useContext } from 'react';
import AppContext from '../hooks/AppContext';
import styled from 'styled-components';
import Button from '../components/Button';
import Chessboard from '../components/Chessboard';

const AppContainerStyled = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const ButtonContainers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:25px;
    margin: 0 auto;
`;

const AppContainer = () => {
    const { dispatch } = useContext(AppContext);

    const addPawn = () => dispatch({ type: 'add'});
    const resetBoard = () => dispatch({ type: 'resetBoard'});

    return (
        <>
            <AppContainerStyled>
                <Chessboard />
                <ButtonContainers>
                    <Button onClick={() => addPawn()}>Add pawn</Button>
                    <Button onClick={() => resetBoard()}>Reset board</Button>
                </ButtonContainers>
            </AppContainerStyled>
        </>
    )
}

export default AppContainer
