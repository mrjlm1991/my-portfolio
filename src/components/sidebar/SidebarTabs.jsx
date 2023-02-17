import React, { useContext } from "react"
import { grey } from "@mui/material/colors"
import { Tab, Tabs, Typography } from "@mui/material"
import MainContext from "../../context"
import { tabsData } from "../../constants/tabsData.sidebar"
import { useTheme } from "@mui/material/styles"

const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext)

  const tabProps = index => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    }
  }
  const data = tabsData()
  const theme = useTheme()
  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      sx={{ mt: 1 }}
      value={pageNumber}
      indicatorColor="primary"
      textColor="primary"
      onChange={handlePageNumber}
    >
      {data.map((tab, index) => (
        <Tab
          key={index}
          sx={{
            alignItems: "start",
            backgroundColor:
              theme.palette.mode === "dark" ? grey[800] : grey[500],
            borderRadius: 2,
            m: 0.5,
            "&.MuiTab-root": {
              minHeight: 50,
            },
          }}
          label={
            <div>
              <Typography variant="subtitle2">
                {tab.icon}
                {tab.label}
              </Typography>
            </div>
          }
          onClick={() => setDrawerOpen(false)}
          {...tabProps(index)}
        />
      ))}
    </Tabs>
  )
}

export default SidebarTabs
