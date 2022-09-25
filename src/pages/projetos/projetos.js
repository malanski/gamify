import './projetos.scss';
import { CardProjetos } from '../../components/CardProjetos'
import { CardCriaProjetos } from '../../components/CardCriarProjetos';
import { Grid } from '@mui/material';

export function Projetos() {

    return (
        <div className="projetos">
            <h2>Meus Projetos</h2>
            <br />

            <Grid container spacing={3} >

                    <Grid item xs={6}>
                        <CardProjetos />
                    </Grid>

                    <Grid item xs={6}>
                        <CardCriaProjetos />
                    </Grid>

            </Grid>
            {/* <div className='cards'>

                <CardProjetos />

                <CardCriaProjetos />

            </div> */}


        </div>
    )
}