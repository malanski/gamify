import './App.scss';

// Libraries
import { Routes, Route, HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

// Navigation
import { Home } from './pages/home'
import { Login } from './pages/login'
import { Projetos } from './pages/projetos'
import { Register } from './pages/register';

// Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { theme } from './styles/styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HashRouter>

          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/projetos' element={<Projetos />} />
            <Route path='/register' element={<Register />} />
          </Routes>

          <Footer />
        </HashRouter>

      </div>
    </ThemeProvider>
  );
}

export default App;
