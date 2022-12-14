// import './Header.scss';

// Components
import Button from '@mui/material/Button';

// Libraries
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Responsive = styled('div')(({ theme }) => ({
  [theme.breakpoints.up("mobile")]: {
    backgroundColor: 'gray',
    height: 'auto',
    width: '100%',
    padding: '30px',
    flexDirection: 'column-reverse',
    div: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '20px',
      width: '100%',
      margin: 'auto'
    },
  },
  [theme.breakpoints.between("tablet")]: {
    display: 'block',
    div: {
      width: '50%',
      div: {
        width: '100%',
      },
    },
  },
  [theme.breakpoints.up("tablet")]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    div: {
      width: '30%',
      margin: '0',
      div: {
        width: '100%',
        margin: '0'
      }
    },
  },
  [theme.breakpoints.up("desktop")]: {
    div: {
      width: '20%',
      margin: '0',
      div: {
        width: '100%',
        margin: '0'
      }
    },
  }
}));


export function Header(props) {

  const { showButtons, stateButtons, exitButtons, stateExitButtons } = props;

  const changeButtons = () => {
    stateButtons();
    stateExitButtons();
  }

  return (
    <Responsive>
      {exitButtons ? 
        <h1>
          Walker Lobato
        </h1>        
        :
        <Link title="home" to="/">
          <h1 onClick={stateButtons}>Nome do Site</h1>
        </Link>
      }
      {showButtons &&
        <div className='header-buttons'>
          <Link title="Entrar" to="/login">
            <Button
              sx={{ width: '70%' }}
              variant="contained"
              onClick={stateButtons}>
              Entrar
            </Button>
          </Link>
          <Link title="Cadastrar-se" to="/register">
            <Button
              sx={{ width: '70%' }}
              variant="contained"
              onClick={stateButtons}>
              Cadastrar-se
            </Button>
          </Link>
        </div>}
        {exitButtons &&
            <div>
              <Link title="Cadastrar-se" to="/login">
                <Button
                  onClick={stateExitButtons}
                  sx={{ width: '70%' }}
                  variant="contained">
                  Trocar Usu??rio
                </Button>
              </Link>
              <Link title="Cadastrar-se" to="/">
                <Button
                  onClick={changeButtons}
                  sx={{ width: '70%' }}
                  variant="contained">
                  Sair
                </Button>
              </Link>
            </div>}
    </Responsive>
  );
}

