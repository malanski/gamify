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
// import { CardProjetos } from './components/CardProjetos';

import { theme } from './styles/styles'
import { useState } from 'react';
import { Detalhes } from './pages/detalhes';

function App() {
  const [showButtons, setShowButtons] = useState(true);
  const [exitButtons, setExitButtons] = useState(false);
  
  const stateButtons = () => {
    if (showButtons) return setShowButtons(false);
    setShowButtons(true);
  }
  
  const stateExitButtons = () => {
    if (exitButtons) return setExitButtons(false);
    setExitButtons(true);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HashRouter>
          <Header
            showButtons={showButtons}
            exitButtons={exitButtons}
            stateButtons={stateButtons}
            stateExitButtons={stateExitButtons} />
          <Routes>
            <Route
              path='/'
              element={<Home stateButtons={stateButtons} />} />
            <Route 
              path='/login'
              element={<Login stateExitButtons={stateExitButtons} />} />
            <Route 
              path='/projetos' 
              element={
                <Projetos stateButtons={stateButtons} />} />
            <Route 
              path='/detalhes' 
              element={
                <Detalhes />} />
            <Route
              path='/register'
              element={<Register />} />
          </Routes>
          <Footer />
        </HashRouter>

      </div>
    </ThemeProvider>
  );
}

export default App;
