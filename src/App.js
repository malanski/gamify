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
  const stateButtons = () => {
    if (showButtons) return setShowButtons(false);
    setShowButtons(true);
    console.log(showButtons)
  }
  
  const [showExitButtons, setShowExitButtons] = useState(false);
  const stateExitButtons = () => {
    if (showExitButtons) return setShowExitButtons(true);
    setShowExitButtons(false);
    console.log(showExitButtons)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HashRouter>
          <Header
            showButtons={showButtons}
            showExitButtons={showExitButtons}
            stateButtons={stateButtons}
            stateExitButtons={stateExitButtons} />
          <Routes>
            <Route
              path='/'
              element={<Home stateButtons={stateButtons} />} />
            <Route 
              path='/login'
              element={<Login />} />
            <Route 
              path='/projetos' 
              element={
                <Projetos 
                  stateButtons={stateButtons} 
                  stateExitButtons={stateExitButtons}/>} />
            <Route 
              path='/detalhes' 
              element={
                <Detalhes 
                  stateButtons={stateButtons} 
                  stateExitButtons={stateExitButtons}/>} />
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
