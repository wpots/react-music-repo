import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ProfileButton from "../Auth/ProfileButton";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header({ onMenuOpen }: { onMenuOpen: Function }) {
  const handleMenuOpen = () => {
    onMenuOpen(true);
  };

  return (
    <header className="header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" className="top-navigation">
          <Toolbar>
            <IconButton onClick={handleMenuOpen} className="menu-toggle">
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              GoedGebekt Portal
            </Typography>
            <ProfileButton />
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}
