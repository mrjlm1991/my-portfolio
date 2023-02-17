import React from "react"
import Grid from "@mui/material/Unstable_Grid2"
import { courses } from "../../../constants/courses"
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Button,
  CardMedia,
  Slide,
} from "@mui/material"
import ReadMore from "../../ReadMore"

const PortfolioCards = ({ loading }) => {
  return (
    <>
      {courses.map((course, index) => (
        <Grid key={index} xs={12} sm={6} md={6} lg={4} sx={{ px: 2, mb: 2 }}>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? `${index + 3}99ms` : "0ms",
            }}
          >
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: "steelblue",
              }}
            >
              <CardActionArea href={course.link} target="_blank">
                <CardMedia
                  component="img"
                  height="250"
                  width="200"
                  image={course.image}
                  alt={course.title}
                />
                <CardContent>
                  <Typography variant="body1" textAlign="left" gutterBottom>
                    {course.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                gutterBottom
                sx={{ direction: "ltr" }}
              >
                <ReadMore limit={80}>{course.info}</ReadMore>
              </Typography>
              <CardActions>
                <Button
                  href={course.link}
                  size="small"
                  color="primary"
                  target="_blank"
                >
                  نمایش آنلاین
                </Button>
              </CardActions>
            </Card>
          </Slide>
        </Grid>
      ))}
    </>
  )
}

export default PortfolioCards
