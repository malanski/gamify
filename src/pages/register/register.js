import './register.scss';

// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import { styled } from '@mui/material/styles'
import {
    Button,
    FilledInput,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    TextField
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



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

export function Register() {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
        confirmPassword: '',
        showConfirmPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        console.log(values.password)
    };

    const handleChangeConfirm = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        console.log(values.confirmPassword)
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleClickShowConfirmPassword = () => {
        setValues({
            ...values,
            showConfirmPassword: !values.showConfirmPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="register">
            <div>
                <Responsive>
                    <h2>Registre-se</h2>
                    <h3>É grátis!</h3>
                    <TextField
                        id="outlined-basic"
                        label="Nome"
                        variant="outlined"
                        sx={{
                            width: '80%',
                            margin: '10px'
                        }} />
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        sx={{
                            width: '80%',
                            margin: '10px'
                        }} />
                    <FormControl
                        sx={{ m: 1, width: '70%' }}
                        variant="filled">
                        <InputLabel htmlFor="filled-adornment-password">
                            Senha
                        </InputLabel>
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
                    <FormControl
                        sx={{ m: 1, width: '70%' }}
                        variant="filled">
                        <InputLabel htmlFor="filled-adornment-password">Confirmar senha</InputLabel>
                        <FilledInput
                            id="filled-adornment-password"
                            type={values.showConfirmPassword ? 'text' : 'password'}
                            value={values.confirmPassword}
                            onChange={handleChange('confirmPassword')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowConfirmPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <br></br>
                    <Link title="Cadastrar-se" to="/login">
                        <Button
                            sx={{
                                width: '50%',
                                height: '55px',
                                margin: '10px',
                                padding: '20px'
                            }}
                            variant="contained">
                            Cadastrar
                        </Button>
                    </Link>
                </Responsive>
            </div>

        </div>
    )
}