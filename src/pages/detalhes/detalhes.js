import './detalhes.scss';

import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { BarraProgresso } from '../../components/BarraProgresso';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles'
import * as React from 'react';


const Responsive = styled("div")(({ theme }) => ({

    [theme.breakpoints.down("tablet")]: {
        display: 'block',
        width: '100%',
        input: {
            width: '100%',
        }
    },
    [theme.breakpoints.up("tablet")]: {
        display: 'block',
        width: '70%',
        margin: 'auto',
        input: {
            width: '100%',
        }
    },
    [theme.breakpoints.up("laptop")]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',

    }
}));

export function Detalhes() {
    const [dense, setDense] = React.useState(false);
    return (
        <div className="detalhes">

            <div className="detalhes-header">
                <h2>Nome do Projeto</h2>
                <Link title="Voltar" to="/projetos">
                    <Button
                        sx={{
                            height: '55px',
                            margin: '10px',
                        }}
                        variant="contained">
                        Voltar
                    </Button>
                </Link>

            </div>

            <br />
            <div className='tempo'>
                <p>Início: 14/09/2022</p>
                <p>Prazo: 11/12/2022</p>
            </div>
            <Responsive>

                <TextField
                    id="outlined-basic"
                    label="Digite a tarefa"
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
                        variant="contained">
                        Adicionar Tarefa
                    </Button>
                </Link>
            </Responsive>

            <div className='projeto-header'>
                <p className='lista-title'>Lista de Tarefas</p>
                <BarraProgresso />
            </div>

            <div className='lista-tarefas'>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={dense}
                            onChange={(event) => setDense(event.target.checked)}
                        />
                    }
                    label="Descrição da Tarefa"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={dense}
                            onChange={(event) => setDense(event.target.checked)}
                        />
                    }
                    label="Descrição da Tarefa"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={dense}
                            onChange={(event) => setDense(event.target.checked)}
                        />
                    }
                    label="Descrição da Tarefa"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={dense}
                            onChange={(event) => setDense(event.target.checked)}
                        />
                    }
                    label="Descrição da Tarefa"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={dense}
                            onChange={(event) => setDense(event.target.checked)}
                        />
                    }
                    label="Descrição da Tarefa"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={dense}
                            onChange={(event) => setDense(event.target.checked)}
                        />
                    }
                    label="Descrição da Tarefa"
                />
            </div>

        </div>
    )
}