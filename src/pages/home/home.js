import './home.scss';
import photo from '../../assets/image/manOnPc.avif';

// Components
import { Button, TextField } from '@mui/material';

// Libraries
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom';

const Responsive = styled("div")(({ theme }) => ({

    [theme.breakpoints.down("tablet")]: {
        display: 'block',
        width: '100%',
        input: {
            width: '100%',
            backgroundColor: 'orange',
        }
    },
    [theme.breakpoints.up("tablet")]: {
        display: 'block',
        width: '70%',
        margin: 'auto',
        input: {
            width: '100%',
            backgroundColor: 'red',
        }
    },
    [theme.breakpoints.up("laptop")]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        input: {

            backgroundColor: 'green',
        }
    }
}));

export function Home({ stateButtons }) {

    return (
        <div className="home">
            <p className="intro-text">
                &ensp;&ensp;&ensp;&ensp;
                Dificuldade de planejar e concluir seus projetos nunca foi
                tão divertido! A ferramenta (nome do site) é ideal para você,
                pois de forma simples, gamificada e intuitiva você conseguirá
                ser mais produtivo.
            </p>

            <br></br>

            <p className="site-description">
                &ensp;&ensp;&ensp;&ensp;
                Bem vindo, (nome do site) é uma ferramenta que te ajuda no
                gerenciamento de projetos, com ele é possível difinir seus
                projetos, prazos de início, data de finalização e um checklist
                das tarefas necessárias para concluí-los. De acordo com que você,
                usuário for marcando as tarefas como concluídas,consigui-rá
                visualizar o andamento do projeto por meio de uma barra de
                progressão.
            </p>
            <br></br>
            <div>
                <Responsive>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"

                        sx={{
                            width: '80%',

                            margin: '10px'
                        }} />

                    <Link title="Cadastrar-se" to="/register">
                        <Button
                            sx={{
                                height: '55px',
                                margin: '10px',
                            }}
                            onClick={stateButtons}
                            variant="contained">
                            Crie a sua conta, é grátis!
                        </Button>
                    </Link>

                </Responsive>

            </div>
            <img
                className='image-home'
                src={photo}
                alt="homem trabalhando no computador"
                title='Imagem ilustrativa'>
            </img>
        </div>
    )
}