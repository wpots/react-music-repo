import './globals.css'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import Provider from '@/app/context/client-session-provider';
import { Inter } from 'next/font/google'
import { authOptions } from './api/auth/[...nextauth]/route'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider session={session}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
