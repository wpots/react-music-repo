"use client";
import MainHeader from "@/app/_components/Layout/MainHeader";
import AppDrawer from "@/app/_components/Layout/Drawer";
import Footer from "@/app/_components/Layout/Footer";
import { useState } from "react";
import "./layout.scss";
import { Box, Container } from "@mui/material";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={open ? "layout-default drawer-is-open" : "layout-default"}>
      {/* Include shared UI here e.g. a header or sidebar */}

      <MainHeader onMenuOpen={handleDrawerOpen} />
      <AppDrawer onDismissDrawer={handleDrawerClose} />
      <main>
        <Box sx={{ width: "100%" }}>
          <Container>{children}</Container>
        </Box>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
