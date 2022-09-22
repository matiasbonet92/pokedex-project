import Pages from './pages/Pages'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Pages/>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
