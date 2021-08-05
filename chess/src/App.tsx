import AppContainer from './containers/AppContainer';
import { AppProvider } from './hooks/AppContext';

function App() {
  return (
    <AppProvider>
      <AppContainer/>
    </AppProvider>
  );
}

export default App;
