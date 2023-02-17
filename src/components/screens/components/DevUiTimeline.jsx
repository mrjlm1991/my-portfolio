import React from "react"
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab"
import { EditOffRounded, ConstructionRounded } from "@mui/icons-material"
import { Slide, Typography } from "@mui/material"

const DevUiTimeline = ({ loading }) => {
  return (
    <Timeline position="right" sx={{ direction: "ltr", ml: -34 }}>
      <Slide
        direction="up"
        in={loading}
        style={{
          transitionDelay: loading ? `499ms` : "0ms",
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="warning" variant="outlined">
              <EditOffRounded color="warning" />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "warning.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ mt: 1 }}>
            <Typography variant="body1" color="tomato">
              چی طراحی میکنم؟
            </Typography>
            <Typography variant="body1" color="black" sx={{ mt: 0.5 }}>
              موبایل اپ
            </Typography>
            <Typography variant="body1" color="black" sx={{ mt: 0.5 }}>
              وبسایت
            </Typography>
            <Typography variant="body1" color="black" sx={{ mt: 0.5 }}>
              موکاپ
            </Typography>
            <Typography variant="body1" color="black" sx={{ mt: 0.5 }}>
              لوگو
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Slide>
      <Slide
        direction="up"
        in={loading}
        style={{
          transitionDelay: loading ? `599ms` : "0ms",
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="warning" variant="outlined">
              <ConstructionRounded color="warning" />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "warning.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ mt: 1 }}>
            <Typography variant="body1" color="tomato">
              ابزارهایی که من استفاده میکنم:
            </Typography>
            <Typography
              variant="body1"
              color="black"
              textAlign="right"
              sx={{ mt: 0.5, mr: 5 }}
            >
              Figma
            </Typography>
            <Typography
              variant="body1"
              color="black"
              textAlign="right"
              sx={{ mt: 0.5, mr: 5 }}
            >
              PhotoShop
            </Typography>
            <Typography
              variant="body1"
              color="black"
              textAlign="right"
              sx={{ mt: 0.5, mr: 5 }}
            >
              WireFrame
            </Typography>
            <Typography
              variant="body1"
              color="black"
              textAlign="right"
              sx={{ mt: 0.5, mr: 5 }}
            >
              Pen & Paper
            </Typography>
            <Typography
              variant="body1"
              color="black"
              textAlign="right"
              sx={{ mt: 0.5, mr: 5 }}
            >
              WebFlow
            </Typography>
            <Typography
              variant="body1"
              color="black"
              textAlign="right"
              sx={{ mt: 0.5, mr: 5 }}
            >
              {" "}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Slide>
    </Timeline>
  )
}

export default DevUiTimeline
