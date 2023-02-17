import React from "react"
import { GitHub, Telegram, Instagram, WhatsApp } from "@mui/icons-material"
import { Box, IconButton } from "@mui/material"

const SocialMediaIcons = () => {
  return (
    <Box component="div" sx={{ m: "0 auto", textAlign: "center" }}>
      <IconButton aria-label="Github">
        <a
          href="https://github.com/mrjlm70"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub sx={{ color: "grey" }} />
        </a>
      </IconButton>
      <IconButton aria-label="Telegram">
        <a
          href="https://t.me/mrjlm70"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Telegram sx={{ color: "grey" }} />
        </a>
      </IconButton>
      <IconButton aria-label="WhatsApp">
        <a
          href="https://api.whatsapp.com/send/?phone=989126098648"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp sx={{ color: "grey" }} />
        </a>
      </IconButton>
      <IconButton aria-label="InstaGram">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Instagram sx={{ color: "grey" }} />
        </a>
      </IconButton>
    </Box>
  )
}

export default SocialMediaIcons
