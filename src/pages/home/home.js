import './home.scss';
import photo from '../../assets/image/manOnPc.avif';
import { Button, styled, TextField } from '@mui/material';
// import { styled } from '@mui/material'
import theme from '../../components/theme.js'

const Responsive = styled("div")(({ theme }) => ({

        [theme.breakpoints.up("tablet")]: { 
            display: 'block',
            TextField: { width:'100%'}

        },


        [theme.breakpoints.up("laptop")]: { 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }))


export function Home() {

    return (
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

            <div>

                <Responsive>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        sx={{
                            height: '50px',
                            margin: '10px'
                                
                        }} />
                    <Button
                        sx={{
                            height: '55px',
                            margin: '10px',
                        }}
                        variant="contained">
                        Crie a sua conta, é grátis!
                    </Button>
                </Responsive>


                {/* <Box
                    flexGrow={1}
                    display={{sm: 'block'}}
                    sx={{
                        width: '80%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '20px',
                        }}>
                    
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        sx={{ 
                            width: '60%', 
                            height: '50px'
                            }}/>

                    <Button
                        size='large'
                        variant="contained">
                            Crie a sua conta, é grátis!
                    </Button>
                </Box> */}
            </div>

            <img 
                className='image-home'
                src={ photo }
                alt="homem trabalhando no computador"
                title='Imagem ilustrativa'>
            </img>

        </div>
    )
}