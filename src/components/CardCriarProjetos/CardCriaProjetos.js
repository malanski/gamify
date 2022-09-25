import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import Icon from '@mui/material/Icon';
import { Box } from '@mui/material';

export function CardCriaProjetos() {

  return (
    <Card sx={{
      minWidth: 345,
      minHeight: 345,
      padding: 10,
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      margin: "auto"
    }}>

      <Box sx={{
        margin: "auto",
      }}>
        <Typography variant="body2" color="text.secondary">
          Criar projeto
        </Typography>
        <br></br>

        <Icon baseClassName="material-icons-two-tone">add_circle</Icon>

      </Box>

    </Card>
  );
}