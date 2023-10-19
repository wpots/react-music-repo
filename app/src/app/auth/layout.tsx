
import Footer from '@/app/_components/Footer';



export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="auth">

      <main>{children}</main>
      <Footer />
    </div>

  )
}