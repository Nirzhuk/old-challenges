import {createGlobalStyle} from 'styled-components'
import Routes from 'routes';

const GlobalStyle = createGlobalStyle`
  body {
        margin: 0;
    padding: 0;
        font-family: 'Roboto', sans-serif;
  }
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <Routes/>
    </>
  );
}

export default App;
