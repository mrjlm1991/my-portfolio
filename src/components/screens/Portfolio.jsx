import React, { useState, useEffect } from "react"
import { Card, CardContent } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { SchoolRounded } from "@mui/icons-material"
import { Helmet } from "react-helmet"
import { CustomDivider } from "../common"
import { PortfolioCards } from "./components"

const Portfolio = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    return () => {
      setLoading(false)
    }
  }, [])

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "background.main",
        overflowY: "scroll",
      }}
    >
      <Helmet title={helmetTitle} defer={false} />
      <CardContent>
        <CustomDivider
          bColor="primary.main"
          cColor="primary"
          icon={<SchoolRounded />}
          align="center"
          text="نمونه کارها"
        />
        <Grid container sx={{ mx: 3, mt: 3 }}>
          <PortfolioCards loading={loading} />
        </Grid>
      </CardContent>
    </Card>
  )
}
export default Portfolio
