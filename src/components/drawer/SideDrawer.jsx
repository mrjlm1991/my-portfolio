import { Drawer } from "@mui/material"
import { SidebarContent } from "../sidebar"
import React, { useContext } from "react"
import MainContext from "../../context"

const SideDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useContext(MainContext)

  return (
    <Drawer
      dir="rtl"
      open={drawerOpen}
      variant="temporary"
      onClose={() => setDrawerOpen(false)}
      // anchor="bottom"
      sx={{
        "& .MuiDrawer-paper": { width: 300 },
        display: { xs: "block", sm: "block", md: "none" },
      }}
    >
      <SidebarContent />
    </Drawer>
  )
}

export default SideDrawer
