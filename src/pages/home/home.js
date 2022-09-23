import './home.scss';
import photo from '../../assets/image/manOnPc.avif';
import { Button, styled, TextField } from '@mui/material';
import { theme } from '../../components/styles';

const Responsive = styled("div")(({ theme }) => ({

    [theme.breakpoints.down("tablet")]: {
        display: 'block',
        margin: '20px',

        textfield: {
            width: '100%',
        },

        button: {
            width: '100%',
            margin:'10px 0',   
        }
    },

    [theme.breakpoints.up("tablet")]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px',

        input: {
            width: '70%',
        },
        button: {
            width: '30%',
            margin:'0 10px',
        }
    },
}))

export function Home() {

    return (

        <themeProvider theme={theme}>
            <div className="home">
                <p className="intro-text">
                    &ensp;&ensp;&ensp;&ensp;
                    Dificuldade de planejar e concluir seus projetos nunca foi
                    tão divertido! A ferramenta (nome do site) é ideal para você,
                    pois de forma simples, gamificada e intuitiva você conseguirá
                    ser mais produtivo.
                </p>
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
                <Responsive>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        sx={{
                            width: '70%',
                        }}
                    />
                    <Button
                        sx={{
                            height: '55px',
                        }}
                        variant="contained">
                        Crie a sua conta, é grátis!
                    </Button>
                </Responsive>
                <img
                    className='image-home'
                    src={photo}
                    alt="homem trabalhando no computador"
                    title='Imagem ilustrativa'>
                </img>
            </div>
        </themeProvider>
    )
}