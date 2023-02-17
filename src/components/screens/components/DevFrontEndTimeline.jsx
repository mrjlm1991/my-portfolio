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
import ReadMoreEn from "./ReadMoreEn"

const DevUipTimeline = ({ loading }) => {
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
            <TimelineDot color="success" variant="outlined">
              <EditOffRounded color="success" />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "success.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ mt: 1 }}>
            <Typography variant="body1" color="tomato">
              زبانهای من:
            </Typography>
            <Typography
              variant="body1"
              color="black"
              textAlign="right"
              sx={{ mt: 0.5, mr: 5 }}
            >
              JavaScript
            </Typography>
            <Typography
              variant="body1"
              color="black"
              textAlign="right"
              sx={{ mt: 0.5, mr: 5 }}
            >
              HTML
            </Typography>
            <Typography
              variant="body1"
              color="black"
              textAlign="right"
              sx={{ mt: 0.5, mr: 5 }}
            >
              CSS
            </Typography>
            <Typography
              variant="body1"
              color="black"
              textAlign="right"
              sx={{ mt: 0.5, mr: 5 }}
            >
              PHP
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
            <TimelineDot color="success" variant="outlined">
              <ConstructionRounded color="success" />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "success.main" }} />
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
              React Native
            </Typography>
            <Typography
              variant="body1"
              color="black"
              textAlign="right"
              sx={{ mt: 0.5, mr: 5 }}
            >
              <ReadMoreEn limit={7}>ReactJS, NextJS, GatsbyJS</ReadMoreEn>
            </Typography>
            <Typography
              variant="body1"
              color="black"
              textAlign="right"
              sx={{ mt: 0.5, mr: 5 }}
            >
              TailWindCSS
            </Typography>
            <Typography
              variant="body1"
              color="black"
              textAlign="right"
              sx={{ mt: 0.5, mr: 5 }}
            >
              Material UI
            </Typography>
            <Typography
              variant="body1"
              color="black"
              textAlign="right"
              sx={{ mt: 0.5, mr: 5 }}
            >
              WordPress
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Slide>
    </Timeline>
  )
}

export default DevUipTimeline
