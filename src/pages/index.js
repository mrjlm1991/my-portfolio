import React, { useEffect, useState } from "react"
import Layout from "../layouts/layout"
import PagesContainer from "../containers/PagesContainer"
import Sidebar from "../components/sidebar/Sidebar"
import { Page } from "../components/screens/components"
import { useMediaQuery } from "@mui/material"
import SidebarContainer from "../containers/SidebarContainer"
import MainContext from "../context"
import { DrawerActionButton } from "../components/drawer"
import SwipeableViews from "react-swipeable-views"
import {
  Home,
  About,
  Resume,
  Portfolio,
  Comments,
  Contact,
} from "../components/screens"
import { useTheme } from "@mui/material/styles"

const IndexPage = () => {
  const [pageNumber, setPageNumber] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [mode, setMode] = useState()

  const theme = useTheme()
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"))
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark")

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light")
  }, [])

  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false)
    }
  }, [isMdUp])

  const handlePageNumber = (event, newValue) => {
    setPageNumber(newValue)
  }

  const handleThemeChange = () => {
    setMode(prevMode => (prevMode === "light" ? "dark" : "light"))
  }

  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handlePageNumber,
        drawerOpen,
        setDrawerOpen,
        handleThemeChange,
      }}
    >
      <Layout mode={mode}>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerActionButton />
        <PagesContainer>
          <SwipeableViews
            // axis="y"
            index={pageNumber}
            onChangeIndex={handlePageNumber}
          >
            <Page pageNumber={pageNumber} index={0}>
              <Home helmetTitle="امیرحسین جلالی منش | صفحه اصلی" />
            </Page>
            <Page pageNumber={pageNumber} index={1}>
              <About helmetTitle="امیرحسین جلالی منش | درباره من" />
            </Page>
            <Page pageNumber={pageNumber} index={2}>
              <Resume helmetTitle="امیرحسین جلالی منش | رزومه من" />
            </Page>
            <Page pageNumber={pageNumber} index={3}>
              <Portfolio helmetTitle="امیرحسین جلالی منش | نمونه کارها" />
            </Page>
            <Page pageNumber={pageNumber} index={4}>
              <Comments helmetTitle="امیرحسین جلالی منش | نظرات" />
            </Page>
            <Page pageNumber={pageNumber} index={5}>
              <Contact helmetTitle="امیرحسین جلالی منش | ارتباط با من" />
            </Page>
          </SwipeableViews>
        </PagesContainer>
      </Layout>
    </MainContext.Provider>
  )
}

export default IndexPage
