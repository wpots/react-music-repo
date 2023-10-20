import MainHeader from '@/app/_components/Layout/MainHeader';
import Drawer from '@/app/_components/Layout/Drawer';
import Footer from '@/app/_components/Layout/Footer';



export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="dashboard">
      {/* Include shared UI here e.g. a header or sidebar */}

      <MainHeader />
      <Drawer />
      <main>{children}</main>
      <Footer />
    </div>

  )
}