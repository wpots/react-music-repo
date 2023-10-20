
import { Paper, Typography } from '@mui/material';

export default function Welcome({children}:{
  children: React.ReactNode
}) {
    const getStyles =  {
    'padding': '2rem'
  }

  return (
    <Paper elevation={2} style={getStyles}>
      <Typography variant="h3" component="h1" >
        Welkom bij de Goed Gebekt Portal!
      </Typography>
      <Typography variant="subtitle1" component="p" mb={5}>
        Voor alle koor actualiteiten...
      </Typography>

      {children}

      <Typography variant="body2" component="p" gutterBottom mt={5}>
        Goed Gebekt leden hebben automatisch toegang door in te loggen met hun google e-mailadres. 
      </Typography>
    </Paper>
  )
}