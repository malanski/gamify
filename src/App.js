import './App.scss';
import { ThemeProvider } from '@mui/material';
import { theme } from './components/styles';
import { Footer } from './components/Footer';
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
  )
}

export default App;
