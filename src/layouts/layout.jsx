import * as React from "react"
import "./layout.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { CacheProvider } from "@emotion/react"
import { ThemeProvider } from "@mui/material/styles"
import { lightTheme, darkTheme, cacheRTL } from "./themes"
import Grid from "@mui/material/Unstable_Grid2"

const Layout = ({ children, mode }) => {
  const theme = mode === "dark" ? darkTheme : lightTheme

  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <div dir="rtl">
          {/* Grid System */}
          <Grid container sx={{ height: "100vh" }}>
            {children}
          </Grid>
        </div>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default Layout
