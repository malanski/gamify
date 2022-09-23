import { ThemeProvider } from '@mui/material';
import './App.scss';
import { Footer } from './components/Footer';
import { theme } from './styles/styles'

import { Header } from './components/Header';
import { Home } from './pages/home/home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
          <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
