import { createTheme } from "@mui/material/styles"
import createCache from "@emotion/cache"
import rtlPlugin from "stylis-plugin-rtl"
import { prefixer } from "stylis"

//! Create Custom Theme
export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: { main: "#db4d6e" },
    secondary: { main: "#0cf0bb" },
    background: { main: "#D4C9CD" },
    tpgrey: { main: "#212121b0" },
    nightmode: { main: "#17293a" },
  },
  typography: {
    fontFamily: "YekanBakh,roboto",
    h3: {
      "@media (min-width:1000px)": {
        fontSize: "5rem",
      },
      "@media (max-width:1000px)": {
        fontSize: "4rem",
      },
      "@media (max-width:600px)": {
        fontSize: "3rem",
      },
      "@media (max-width:450px)": {
        fontSize: "2rem",
      },
    },
    h4: {
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
      "@media (max-width:450px)": {
        fontSize: "1.3rem",
      },
    },
  },
})

export const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: { main: "#BC2649" },
    secondary: { main: "#94bb26" },
    background: { main: "#17293a" },
    tpgrey: { main: "#212121b0" },
    nightmode: { main: "#e4ba4e" },
  },
  typography: {
    fontFamily: "YekanBakh,roboto",
    h3: {
      "@media (min-width:1000px)": {
        fontSize: "5rem",
      },
      "@media (max-width:1000px)": {
        fontSize: "4rem",
      },
      "@media (max-width:600px)": {
        fontSize: "3rem",
      },
      "@media (max-width:450px)": {
        fontSize: "2rem",
      },
    },
    h4: {
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
      "@media (max-width:450px)": {
        fontSize: "1.3rem",
      },
    },
  },
})

//! Create RTL cache
export const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
})
