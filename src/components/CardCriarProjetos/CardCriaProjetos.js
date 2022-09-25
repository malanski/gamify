import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';


import Icon from '@mui/material/Icon';
import { Box } from '@mui/material';


export function CardCriaProjetos() {

  return (
    <Card sx={{
        maxWidth: 345,
        padding: 10,
        height: "100%",
        display: "block",
        margin:"auto" }}>
      <Typography variant="body2" color="text.secondary">
        Criar projeto
      </Typography>
      <br></br>
      <Box sx={{ margin: "auto"}}>

        <Icon baseClassName="material-icons-two-tone">add_circle</Icon>

      </Box>

    </Card>
  );
}