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

const DevBackendTimeline = ({ loading }) => {
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
            <TimelineDot color="info" variant="outlined">
              <EditOffRounded color="info" />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "info.main" }} />
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
              PHP
            </Typography>
            <Typography
              variant="body1"
              color="black"
              textAlign="right"
              sx={{ mt: 0.5, mr: 5 }}
            >
              NodeJs
            </Typography>

            <Typography
              variant="body1"
              color="black"
              textAlign="right"
              sx={{ mt: 0.5, mr: 5 }}
            >
              GraphQL
            </Typography>
            <Typography
              variant="body1"
              color="black"
              textAlign="right"
              sx={{ mt: 0.5, mr: 5 }}
            >
              regEx
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
            <TimelineDot color="info" variant="outlined">
              <ConstructionRounded color="info" />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "info.main" }} />
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
              ExpressJS
            </Typography>
            <Typography
              variant="body1"
              color="black"
              textAlign="right"
              sx={{ mt: 0.5, mr: 5 }}
            >
              Strapi
            </Typography>
            <Typography
              variant="body1"
              color="black"
              textAlign="right"
              sx={{ mt: 0.5, mr: 5 }}
            >
              WordPress
            </Typography>
            <Typography
              variant="body1"
              color="black"
              textAlign="right"
              sx={{ mt: 0.5, mr: 5 }}
            >
              ContentFull
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Slide>
    </Timeline>
  )
}

export default DevBackendTimeline
