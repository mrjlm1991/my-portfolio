import React from "react"
import { Box, Divider } from "@mui/material"
import { SidebarHeader, SidebarTabs } from "."

const SidebarContent = () => {
  return (
    <Box sx={{ justifyContent: "center", textAlign: "center", mt: 1 }}>
      <SidebarHeader />
      <Divider variant="middle" sx={{ mt: 0.5 }} />
      <SidebarTabs />
      <Divider variant="middle" sx={{ mt: 2, mb: 3 }} />
    </Box>
  )
}

export default SidebarContent
