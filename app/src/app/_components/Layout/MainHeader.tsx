import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ProfileButton from '../Auth/ProfileButton';


export default function Header() {
  
  return (
    <header className="header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              GoedGebekt Portal
            </Typography>
           <ProfileButton />
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  )
}