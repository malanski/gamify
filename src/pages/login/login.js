import './login.scss';
import { styled } from '@mui/material/styles'
import { Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

import React from 'react';

const Responsive = styled("div")(({ theme }) => ({

    [theme.breakpoints.up("mobile")]: {
        display: 'block',

        border: '1px solid',
        borderColor: 'black',
        borderRadius: '20px',

    },
    [theme.breakpoints.down("tablet")]: {
        width: '100%',
        border: '1px solid',
        borderColor: 'black',
        borderRadius: '20px',

        input: {
            width: '100%',
            backgroundColor: 'orange',
        }
    },
    [theme.breakpoints.up("tablet")]: {
        width: '70%',
        margin: 'auto',
        input: {
            width: '100%',
            backgroundColor: 'red',
        }
    },
    [theme.breakpoints.up("laptop")]: {

        width: '50%',
        input: {

            backgroundColor: 'green',
        }
    }
}))
export function Login() {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div className="login">
            <div>
                <Responsive>

                    <TextField
                        id="outlined-basic"
                        label="Nome ou Email"
                        variant="outlined"
                        sx={{
                            width: '80%',
                            margin: '10px'
                        }} />
                    <FormControl sx={{ m: 1, width: '70%' }} variant="filled">
                        <InputLabel htmlFor="filled-adornment-password">Senha</InputLabel>
                        <FilledInput
                            id="filled-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <br></br>
                    <Link title="Cadastrar-se" to="/projetos">
                        <Button
                            sx={{
                                height: '55px',
                                margin: '10px',
                                padding: '20px'
                            }}
                            variant="contained">
                            Entrar
                        </Button>
                    </Link>
                </Responsive>
            </div>

        </div>
    )
}