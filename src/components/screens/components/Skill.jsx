import { Box, Chip, LinearProgress, Typography } from "@mui/material"
import React from "react"

const Skill = ({ icon, color, name, value }) => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="grey">
            {`${Math.round(value)}%`}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", mx: 1 }}>
          <LinearProgress
            variant="determinate"
            value={value}
            sx={{ height: 25, borderRadius: 2 }}
            color={color}
          />
        </Box>
        <Chip
          icon={<Box component="img" src={icon} sx={{ height: 30 }} />}
          color={color}
          label={name}
          sx={{ color: "#000", p: 3, width: 200 }}
        />
      </Box>
    </>
  )
}

export default Skill
