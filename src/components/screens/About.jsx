import React from "react"
import Grid from "@mui/material/Unstable_Grid2"
import { Card, CardContent } from "@mui/material"
import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material"
import { AboutInfo, Skills, DevWorkCount } from "./components"
import { Helmet } from "react-helmet"
import { CustomDivider } from "../common"

const About = ({ helmetTitle }) => {
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
        <Grid container sx={{ mx: 3 }}>
          <Grid xs={12}>
            <CustomDivider
              bColor="primary.main"
              cColor="primary"
              icon={<CodeRounded />}
              align="center"
              text="درباره من"
            />
            <Grid container>
              <Grid
                xs={4}
                sm={4}
                md={3}
                lg={3}
                sx={{ display: { xs: "none", sm: "block" }, mt: 3 }}
              >
                <DevWorkCount />
              </Grid>
              <Grid xs={12} sm={8} md={9} lg={9}>
                <AboutInfo />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 5 }}>
          <Grid sx={{ width: 1 }}>
            <CustomDivider
              bColor="secondary.main"
              cColor="secondary"
              icon={<SelfImprovementRounded />}
              align="center"
              text="مهارتهای من"
            />
            <Skills />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default About
