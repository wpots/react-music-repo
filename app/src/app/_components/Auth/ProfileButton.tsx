
'use client'
import { useState } from 'react';
import {signOut, useSession} from 'next-auth/react';
import { Avatar, ButtonBase, Dialog, List, ListItem, ListItemButton } from '@mui/material';
import LoginButton from './LoginButton';

export default function ProfileButton() {
  const [open, setOpen] = useState(false);

  const {data:session} = useSession();
  if(!session) {
    return <LoginButton>Inloggen</LoginButton>;
  }

  const handleOpenProfileOptions = () => {
    setOpen(true);
  }
  const handleDialogClose = () => {
    setOpen(false);
  }
  return (
    <>
    <ButtonBase onClick={handleOpenProfileOptions}><Avatar></Avatar></ButtonBase>
    <Dialog onClose={handleDialogClose} open={open}>
      <List>
        <ListItem>
          <ListItemButton href="/profile">Mijn gegevens</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => signOut()}>Uitloggen</ListItemButton>
        </ListItem>
      </List>
    </Dialog>
    </>
  )
}