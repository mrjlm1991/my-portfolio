import { Box, Typography } from "@mui/material"
import bg from "../../assets/bg01.jpeg"
import Typed from "typed.js"
import React, { useEffect, useRef, useCallback } from "react"
import Particles from "react-particles"
import { loadFull } from "tsparticles"
import { links } from "../../constants/particles"
import { Helmet } from "react-helmet"

const Home = ({ helmetTitle }) => {
  const nameEl = useRef(null)
  const infoEl2 = useRef(null)
  const infoEl3 = useRef(null)
  const infoEl4 = useRef(null)

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["امیرحسین جلالی منش"],
      typeSpeed: 70,
      showCursor: true,
    })

    const typedInfo2 = new Typed(infoEl2.current, {
      strings: ["  من یک طراح اینترفیس هستم"],
      typeSpeed: 50,
      startDelay: 2000,
      showCursor: false,
    })

    const typedInfo3 = new Typed(infoEl3.current, {
      strings: ["من یک برنامه نویس جاوااسکریپت هستم"],
      typeSpeed: 50,
      startDelay: 4500,
      showCursor: false,
    })

    const typedInfo4 = new Typed(infoEl4.current, {
      strings: ["من یک توسعه دهنده فول استک وب و موبایل هستم"],
      typeSpeed: 50,
      startDelay: 7500,
      showCursor: false,
    })

    return () => {
      typedName.destroy()
      typedInfo2.destroy()
      typedInfo3.destroy()
      typedInfo4.destroy()
    }
  }, [])
  const particlesInit = useCallback(async engine => {
    await loadFull(engine)
  }, [])
  const particlesLoaded = useCallback(async container => {
    await console.log(container)
  }, [])

  return (
    <Box
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Helmet title={helmetTitle} defer={false} />
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={links}
      />
      <Typography
        ref={nameEl}
        variant="h3"
        color="tomato"
        fontFamily="javan"
        sx={{
          backgroundColor: "tpgrey.main",
          borderRadius: 5,
          fontWeight: "bold",
        }}
      ></Typography>
      <Typography
        ref={infoEl2}
        variant="h4"
        color="whitesmoke"
        fontFamily="javan"
        sx={{
          fontWeight: "bold",
          textDecoration: "underline",
          textDecorationColor: "tomato",
          backgroundColor: "tpgrey.main",
          borderRadius: 5,
        }}
      ></Typography>
      <Typography
        ref={infoEl3}
        variant="h4"
        color="whitesmoke"
        fontFamily="javan"
        sx={{
          fontWeight: "bold",
          textDecoration: "underline",
          textDecorationColor: "tomato",
          backgroundColor: "tpgrey.main",
          borderRadius: 5,
        }}
      ></Typography>
      <Typography
        ref={infoEl4}
        variant="h4"
        color="whitesmoke"
        fontFamily="javan"
        sx={{
          fontWeight: "bold",
          textDecoration: "underline",
          textDecorationColor: "tomato",
          backgroundColor: "tpgrey.main",
          borderRadius: 5,
        }}
      ></Typography>
    </Box>
  )
}

export default Home
