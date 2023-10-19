'use client';

import Button from '@mui/material/Button';
import { signIn } from 'next-auth/react';

export default function LoginButton({children}:{
  children: React.ReactNode
}) {
  const handleLogin = () => signIn('google');

  return (
    <Button onClick={handleLogin} variant="contained">{children} BITCH</Button>
  )
}