import { Button } from '../Button/Button';
import './Header.css';

export function Header() {
    return (
      <header className="header">
        <h1>Nome do Site</h1>
        
        <div className="btn-header">            
            <Button className="enter-login" text="Entrar"/>
            <Button className="enter-login" text="Cadastrar-se" />
        </div>
        
      </header>
    );
  }

