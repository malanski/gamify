// import { Button } from '../Button/Button';
import Button from '@mui/material/Button';
import './Header.css';

export function Header() {
    return (
      <header className="header">
        <h1>Nome do Site</h1>
        
        <div className="header-container">
                   
          <div className="btn-header">
            <Button fullWidth variant="contained">Entrar</Button>
            <Button fullWidth variant="contained">Cadastrar-se</Button>
            {/* <Button className="enter-login" text="Entrar"/> */}
            {/* <Button className="enter-login" text="Cadastrar-se" /> */}
          </div>
        </div>
        
      </header>
    );
  }

