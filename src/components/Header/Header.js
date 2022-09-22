import Button from '@mui/material/Button';
import './Header.scss';

export function Header() {
    return (
      <header className="header">
        <h1>Nome do Site</h1>
        
        <div className="header-container">
                   
          <div className="btn-header">
            <Button fullWidth variant="contained">Entrar</Button>
            <Button fullWidth variant="contained">Cadastrar-se</Button>
           
          </div>
        </div>
        
      </header>
    );
  }

