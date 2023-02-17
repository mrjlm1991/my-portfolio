import React, { useState, useEffect } from "react"
import { Typography, Card, CardContent, Slide } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { AccountCircle } from "@mui/icons-material"
import { Helmet } from "react-helmet"
import worldMap from "../../assets/map.svg"
import { CustomDivider } from "../common"
import { ContactForm } from "./components"

const Contact = ({ helmetTitle }) => {
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
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Helmet title={helmetTitle} defer={false} />
      <CardContent>
        <CustomDivider
          bColor="warning.main"
          cColor="warning"
          icon={<AccountCircle />}
          align="center"
          text="ارتباط با من"
        />
        <Grid container sx={{ mt: 10 }}>
          <Slide
            direction="up"
            in={loading}
            style={{ transitionDelay: loading ? "200ms" : "0ms" }}
          >
            <Grid
              xs={12}
              sm={12}
              md={0}
              sx={{
                textAlign: "center",
                backgroundImage: `url(${worldMap})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                mb: 5,
              }}
            >
              <Typography
                variant="h6"
                color="text.main"
                sx={{
                  mt: 4,
                  display: {
                    sm: "block",
                    md: "none",
                  },
                }}
              >
                بیا در مورد پروژت باهم صحبت کنیم
              </Typography>
              <Typography
                variant="body1"
                color="text.main"
                sx={{
                  mt: 2,
                  display: {
                    sm: "block",
                    md: "none",
                  },
                }}
              >
                👋{" "}
                <a
                  href="mailto:mr.jlm1370@gmail.com.ir"
                  alt="email"
                  style={{
                    color: "tomato",
                  }}
                >
                  ایمیل
                </a>{" "}
                بزن به من
              </Typography>
            </Grid>
          </Slide>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? "200ms" : "0ms",
            }}
          >
            <Grid xs={12} sx={12} md={8}>
              <Card
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ContactForm />
              </Card>
            </Grid>
          </Slide>
          <Slide
            direction="up"
            in={loading}
            style={{ transitionDelay: loading ? "200ms" : "0ms" }}
          >
            <Grid
              xs={0}
              sm={0}
              md={4}
              sx={{
                textAlign: "center",
                backgroundImage: `url(${worldMap})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <Typography
                variant="h6"
                color="text.main"
                sx={{
                  mt: 4,
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                }}
              >
                بیا در مورد پروژت باهم صحبت کنیم
              </Typography>
              <Typography
                variant="body1"
                color="text.main"
                sx={{
                  mt: 2,
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                }}
              >
                👋{" "}
                <a
                  href="mailto:mr.jlm1370@gmail.com.ir"
                  alt="email"
                  style={{
                    color: "tomato",
                  }}
                >
                  ایمیل
                </a>{" "}
                بزن به من
              </Typography>
            </Grid>
          </Slide>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Contact
