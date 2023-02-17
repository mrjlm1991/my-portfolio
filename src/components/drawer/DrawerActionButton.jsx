import { Box, Fab } from "@mui/material"
import React, { useContext } from "react"
import MainContext from "../../context"
import { red } from "@mui/material/colors"
import { MenuRounded } from "@mui/icons-material"

const DrawerActionButton = () => {
  const { setDrawerOpen } = useContext(MainContext)

  return (
    <Box
      sx={{
        position: "absolute",
        display: {
          sm: "block",
          md: "none",
        },
      }}
    >
      <Fab
        aria-label="Sidebar"
        size="small"
        sx={{ m: 2, backgroundColor: red[400] }}
        onClick={() => setDrawerOpen(true)}
      >
        <MenuRounded />
      </Fab>
    </Box>
  )
}

export default DrawerActionButton
