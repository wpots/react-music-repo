import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { signIn } from "next-auth/react"


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default async function Page (): Promise<any> {
  const session = await getServerSession(authOptions);


  return (
    <div className='grid grid-cols-2 text-white p-4'>

    </div>
  )
}