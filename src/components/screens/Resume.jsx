import React, { useEffect, useState } from "react"
import { Box, Card, CardContent, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import {
  SettingsEthernetRounded,
  BrushRounded,
  SettingsApplicationsRounded,
  DeveloperModeRounded,
  LightbulbRounded,
} from "@mui/icons-material"
import { Helmet } from "react-helmet"
import { CustomDivider } from "../common"
import {
  DevUiTimeline,
  DevBackendTimeline,
  DevFrontEndTimeline,
} from "./components"
import useMediaQuery from "@mui/material/useMediaQuery"
import ReadMore from "../ReadMore"

const Resume = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    return () => {
      setLoading(false)
    }
  }, [])

  const matches = useMediaQuery("(min-width:1200px)")
  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "whitesmoke",
        overflowY: "scroll",
        bgcolor: "background.main",
      }}
    >
      <Helmet title={helmetTitle} defer={false} />
      <CardContent>
        <CustomDivider
          bColor="error.main"
          cColor="error"
          icon={<SettingsEthernetRounded />}
          align="center"
          text="رزومه من"
        />
        <Grid
          container
          sx={{ mt: 10, bgcolor: "#C0CAD6", p: 2, borderRadius: 10 }}
        >
          <Grid xs={12} lg={4} textAlign="center">
            <CustomDivider
              bColor="warning.main"
              cColor="warning"
              icon={<BrushRounded />}
              align="center"
              text="UI-UX"
            />
            <Box
              sx={{
                mt: 5,
                py: 5,
                px: 5,
                borderLeft: matches ? "1px solid grey" : null,
              }}
            >
              <LightbulbRounded
                color="warning"
                sx={{ p: 0.5, border: "2px solid", borderRadius: 10 }}
              />
              <Typography variant="body1" color="black">
                <ReadMore limit={90}>
                  من به سادگی ساختار محتوی و مرتب بودن دیزاین پترن اهمیت میدم
                  وهمیشه سعی میکنم طراحی فکر شده ای داشته باشم
                </ReadMore>
              </Typography>
              <DevUiTimeline loading={loading} />
            </Box>
          </Grid>

          <Grid xs={12} lg={4} textAlign="center">
            <CustomDivider
              bColor="info.main"
              cColor="info"
              icon={<SettingsApplicationsRounded />}
              align="center"
              text="بک اند"
            />
            <Box sx={{ mt: 5, py: 5, px: 5 }}>
              <LightbulbRounded
                color="info"
                sx={{ p: 0.5, border: "2px solid", borderRadius: 10 }}
              />
              <Typography variant="body1" color="black">
                <ReadMore limit={90}>
                  تمرکز اصلی من فرانته ولی دربک اند هم دستی دارم. فرایندهای
                  اتوماسیون سایت وخیلی چیزای دیگرو میتونید تو نمونه کارام ببینید
                </ReadMore>
              </Typography>
              <DevBackendTimeline loading={loading} />
            </Box>
          </Grid>

          <Grid xs={12} lg={4} textAlign="center">
            <CustomDivider
              bColor="success.main"
              cColor="success"
              icon={<DeveloperModeRounded />}
              align="center"
              text="فرانت اند"
            />
            <Box
              sx={{
                mt: 5,
                py: 5,
                px: 5,
                borderRight: matches ? "1px solid grey" : null,
              }}
            >
              <LightbulbRounded
                color="success"
                sx={{ p: 0.5, border: "2px solid", borderRadius: 10 }}
              />
              <Typography variant="body1" color="black">
                تبدیل طرح به کد از تفریحات منه و لذت میبرم ازینکه ایده ها رو به
                زندگی واقعی و روی مرورگرتون بیارم
              </Typography>
              <DevFrontEndTimeline loading={loading} />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Resume
