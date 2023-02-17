import { Box, Fab } from "@mui/material"
import React, { useContext } from "react"
import MainContext from "../../../context"
import { WbSunnyOutlined, NightlightOutlined } from "@mui/icons-material"
import { useTheme } from "@mui/material/styles"

const ThemeActionButton = () => {
  const { handleThemeChange } = useContext(MainContext)
  const theme = useTheme()

  return (
    <Box
      sx={{
        position: "absolute",
      }}
    >
      <Fab
        aria-label="ThemeChanger"
        size="small"
        color="nightmode"
        onClick={handleThemeChange}
        sx={{ ml: 2, color: "whitesmoke" }}
      >
        {theme.palette.mode === "dark" ? (
          <WbSunnyOutlined />
        ) : (
          <NightlightOutlined />
        )}
      </Fab>
    </Box>
  )
}

export default ThemeActionButton
