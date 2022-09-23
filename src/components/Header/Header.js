import Button from '@mui/material/Button';
// import './Header.scss';
import { styled } from '@mui/material/styles'

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
      width:'60%',
      margin: 'auto'
    } ,
  },
  [theme.breakpoints.between("tablet")]: {
    display: 'block',
    div: {
      width:'50%',
    } ,
  },
  [theme.breakpoints.up("tablet")]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    div: {
      width:'30%',
      margin: '0'
    } , 
  },
  [theme.breakpoints.up("desktop")]: { 
    div: {
      width:'20%',
      margin: '0'
    } , 
}
}));


export function Header() {
  return (
    <Responsive>
      <h1>Nome do Site</h1>

      <div>
        <Button  variant="contained">Entrar</Button>
        <Button  variant="contained">Cadastrar-se</Button>

      </div>
    </Responsive>
  );
}

