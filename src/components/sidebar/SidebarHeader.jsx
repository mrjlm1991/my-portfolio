import { Box, Typography } from "@mui/material"
import avatar from "../../assets/images/avatar.png"
import React from "react"
import { grey } from "@mui/material/colors"
import { CustomAvatar } from "../common"
import ThemeActionButton from "./components/ThemeActionButton"
import SocialMediaIcons from "./components/SocialMediaIcons"

const SidebarHeader = () => {
  return (
    <>
      <ThemeActionButton />
      <CustomAvatar avatar={avatar} size={200} fallback="اج" />
      <Box sx={{ mt: 2 }}>
        <Typography color="text.primary" variant="h6">
          امیرحسین جلالی منش
        </Typography>
        <Typography variant="caption" color={grey[700]}>
          توسعه دهنده فول استک وب و موبایل
        </Typography>
      </Box>
      <SocialMediaIcons />
    </>
  )
}

export default SidebarHeader
