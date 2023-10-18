import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export default async function Page (): Promise<any> {
  const session = await getServerSession(authOptions)
var canUseDOM = !!(
  (typeof window !== 'undefined' &&
  window.document && window.document.createElement)
);
  

  return (
    <div className='grid grid-cols-2 text-white p-4'>
      <div>{canUseDOM && 'CLIENT'}
        {
          session !== null
            ? <h1 className='leading-loose text-[15rem] font-extrabold text-accent'>
                Hi {session?.user?.name}! 
               < br /> <a className='btn btn-primary' href='/api/auth/signout'>Sign out</a>
              </h1>
            : <a className='btn btn-primary' href='/api/auth/signin'>Sign in</a>
        }
      </div>
    </div>
  )
}