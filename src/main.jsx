import ReactDOM from 'react-dom';
import { BrowserRouter  } from 'react-router-dom';
import { AppContextProvider } from './context/ThemeContext';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
  <AppContextProvider>
    <App />
  </AppContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
