import React from "react"
import { Box, Typography, Avatar, Card, CardContent } from "@mui/material"
import Slider from "react-slick"
import { userComments } from "../../../constants/details"

const CommentsSlider = () => {
  const options = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "linear",
  }

  return (
    <Box
      component="div"
      sx={{
        mt: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Slider {...options}>
        {userComments.map((user, index) => (
          <Box key={index} component="div" sx={{ justifyContent: "center" }}>
            <Avatar
              src={user.avatar}
              variant="rounded"
              sx={{
                height: 250,
                width: 250,
                margin: "0 auto",
              }}
            />
            <Typography
              variant="h4"
              textAlign="center"
              color="text.primary"
              sx={{ mt: 5 }}
            >
              {user.fullname}
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              color="text.primary"
              sx={{ mb: 2 }}
            >
              {user.jobTitle}
            </Typography>
            <Card
              sx={{
                backgroundColor: "lightsalmon",
                width: 1 / 2,
                m: "0 auto",
                borderRadius: 5,
              }}
            >
              <CardContent>
                <Typography variant="body1" textAlign="center">
                  {user.comment}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

export default CommentsSlider
