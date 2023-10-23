import Link from "next/link";
import { Drawer, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CalendarIcon from "@mui/icons-material/DateRange";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import MusicIcon from "@mui/icons-material/Lyrics";

export default function AppDrawer({ onDismissDrawer }: { onDismissDrawer: Function }) {
  const handleDismissDrawer = () => {
    onDismissDrawer(true);
  };
  return (
    <Drawer variant="permanent" className="drawer">
      <header className="drawer-header">
        <IconButton onClick={handleDismissDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </header>
      <Divider />
      <List component="nav">
        <ListItem component={Link} href="/calendar">
          <ListItemIcon>
            <CalendarIcon />
          </ListItemIcon>
          <ListItemText>Agenda</ListItemText>
        </ListItem>
        <ListItem component={Link} href="/teams">
          <ListItemIcon>
            <WorkspacesIcon />
          </ListItemIcon>
          <ListItemText>Commissies</ListItemText>
        </ListItem>
        <ListItem component={Link} href="/members">
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText>Leden</ListItemText>
        </ListItem>
        <ListItem component={Link} href="/songs">
          <ListItemIcon>
            <MusicIcon />
          </ListItemIcon>
          <ListItemText>Arrangementen</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
}
