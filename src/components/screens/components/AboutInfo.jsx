import { KeyboardArrowLeftRounded } from "@mui/icons-material"
import { Typography } from "@mui/material"
import React from "react"

const Info = ({ children }) => {
  return (
    <Typography variant="body1" textAlign="left" sx={{ mt: 2 }}>
      {children}
      <KeyboardArrowLeftRounded
        sx={{ verticalAlign: "middle", color: "primary.main" }}
      />
    </Typography>
  )
}

const AboutInfo = () => {
  return (
    <>
      <Info>!مهندس عمرانی که طراح سایت شد</Info>
      <Info>!توسعه دهنده وردپرسی که به برنامه نویسی علاقمند شد</Info>
      <Typography variant="body1" textAlign="left" sx={{ mt: 2 }}>
        زمانی که من مسیرم رو به سمت توسعه دهنده فریلنسر شروع کردم یکسال کار
        حضوری و همکاری با استارتاپها و افراد با استعداد رو برای ساخت محصولات
        دیجیتال تجاری و شخصی رو تجربه کرده بودم
      </Typography>
      <Info>
        ! من شخصیت علاقمند و نسبتا با اعتماد بنفس و جدی در کارم دارم و دایما
        مشغول بهتر کردن ریزه کاری ها هستم
      </Info>
    </>
  )
}

export default AboutInfo
