import Header from '@/app/_components/Header';
import Drawer from '@/app/_components/Drawer';
import Footer from '@/app/_components/Footer';



export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="dashboard">
      {/* Include shared UI here e.g. a header or sidebar */}

      <Header />
      <Drawer />
      <main>{children}</main>
      <Footer />
    </div>

  )
}