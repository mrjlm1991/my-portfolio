import React from "react"
import { Card, CardContent } from "@mui/material"
import { ForumRounded } from "@mui/icons-material"
import { Helmet } from "react-helmet"
import { CustomDivider } from "../common"
import { CommentsSlider } from "./components"

const Comments = ({ helmetTitle }) => {
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
          bColor="success.main"
          cColor="success"
          icon={<ForumRounded />}
          align="center"
          text="نظرات مشتریان من"
        />
        <CommentsSlider />
      </CardContent>
    </Card>
  )
}

export default Comments
