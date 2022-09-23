import './login.scss';
import { styled } from '@mui/material/styles'
import { Button, TextField } from '@mui/material';

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
    return (
        <div className="login">
            <div>
                <Responsive>

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
                        <br></br>
                    <Button
                        sx={{
                            height: '55px',
                            margin: '10px',
                            padding: '20px'
                        }}
                        variant="contained">
                        Entrar
                    </Button>
                </Responsive>
            </div>

        </div>
    )
}