import {
  HomeTwoTone,
  FaceTwoTone,
  TextSnippetTwoTone,
  TerminalTwoTone,
  MessageTwoTone,
  ConnectWithoutContactTwoTone,
} from "@mui/icons-material"
import React from "react"

export const tabsData = () => {
  const tabs = [
    {
      label: "صفحه اصلی",
      icon: (
        <HomeTwoTone sx={{ verticalAlign: "middle", mx: 1, fontSize: 17 }} />
      ),
    },
    {
      label: "درباره من",
      icon: (
        <FaceTwoTone sx={{ verticalAlign: "middle", mx: 1, fontSize: 17 }} />
      ),
    },
    {
      label: "رزومه من",
      icon: (
        <TextSnippetTwoTone
          sx={{ verticalAlign: "middle", mx: 1, fontSize: 17 }}
        />
      ),
    },
    {
      label: "نمونه کارها",
      icon: (
        <TerminalTwoTone
          sx={{ verticalAlign: "middle", mx: 1, fontSize: 17 }}
        />
      ),
    },
    {
      label: "نظرات مشتریان",
      icon: (
        <MessageTwoTone sx={{ verticalAlign: "middle", mx: 1, fontSize: 17 }} />
      ),
    },
    {
      label: "ارتباط با من",
      icon: (
        <ConnectWithoutContactTwoTone
          sx={{ verticalAlign: "middle", mx: 1, fontSize: 17 }}
        />
      ),
    },
  ]

  return tabs
}
