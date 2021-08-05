import { useEffect, useReducer } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Grid from './components/CommonStyleds/Grid';
import GridCard from './components/GridCard'
import useHouseAPI from './hooks/useHouseAPI';

const GlobalStyle = createGlobalStyle`
  body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color: #E0E0DF;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #202020;
  }
  `;

const AppContainer = styled.div`
  margin: 0 auto;
`;


function reducer(state:any, action:any) { //Reducer it's to small to insolate in a file.
  switch (action.type) {
    case 'set':
      return { items: action.items};
    default:
      throw new Error();
  }
}


function App() {
  const [apiData] = useHouseAPI([]);
  useEffect(() => {
    dispatch({ type: 'set', items: apiData });
  }, [apiData])

  const [state,dispatch] = useReducer(reducer, { items: [] });


  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Grid>
          <GridCard data={state.items} />
        </Grid>
      </AppContainer>
    </>
  );
}

export default App;
