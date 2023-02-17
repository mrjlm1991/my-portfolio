import React, { useState } from "react"
import {
  Typography,
  CardContent,
  TextField,
  InputAdornment,
  CardActions,
  Button,
} from "@mui/material"
import { Face6Rounded, SubjectRounded, EmailRounded } from "@mui/icons-material"
import ReCAPTCHA from "react-google-recaptcha"
import { useFormik } from "formik"
import { contactValidationSchema } from "../validations/contactValidation"
import Grid from "@mui/material/Unstable_Grid2"
import { useTheme } from "@mui/material/styles"
import axios from "axios"

const ContactForm = () => {
  const [serverState, setServerState] = useState([{ ok: null, msg: null }])
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg })
  }

  const contactInputNames = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
    recaptcha: "",
  }
  const theme = useTheme()

  const formik = useFormik({
    initialValues: contactInputNames,
    onSubmit: (values, actions) => {
      console.log("Form Values:", values)
      console.log("Form Action:", actions)
      axios({
        method: "POST",
        url: "https://formspree.io/f/mbjegvae",
        data: values,
      })
        .then(response => {
          actions.setSubmitting(false)
          actions.resetForm()
          handleServerResponse(true, "مرسی از پیامت در اسرع وقت جوابت میدم.")
        })
        .catch(error => {
          actions.setSubmitting(false)
          handleServerResponse(false, "خطای سرور")
        })
    },
    validationSchema: contactValidationSchema,
  })

  return (
    <>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <CardContent>
          <Grid container>
            <Grid xs={12} sx={{ direction: "ltr" }}>
              <Grid container spacing={5} sx={{ bgcolor: "background.main" }}>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    color="warning"
                    label="نام و نام خانوادگی"
                    name="fullname"
                    variant="outlined"
                    helperText={
                      formik.touched.fullname ? formik.errors.fullname : null
                    }
                    error={Boolean(
                      formik.touched.fullname && formik.errors.fullname
                    )}
                    value={formik.values?.fullname}
                    onChange={formik.handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment postion="end">
                          <Face6Rounded />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    color="warning"
                    label="آدرس ایمیل"
                    name="email"
                    variant="outlined"
                    helperText={
                      formik.touched.email ? formik.errors.email : null
                    }
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    value={formik.values?.email}
                    onChange={formik.handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment postion="end">
                          <EmailRounded />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid xs={12} md={12}>
                  <TextField
                    fullWidth
                    size="small"
                    color="warning"
                    label="عنوان"
                    name="subject"
                    variant="outlined"
                    helperText={
                      formik.touched.subject ? formik.errors.subject : null
                    }
                    error={Boolean(
                      formik.touched.subject && formik.errors.subject
                    )}
                    value={formik.values?.subject}
                    onChange={formik.handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment postion="end">
                          <SubjectRounded />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid xs={12} md={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    size="small"
                    color="warning"
                    label="متن پیام"
                    name="message"
                    variant="outlined"
                    helperText={
                      formik.touched.message ? formik.errors.message : null
                    }
                    error={Boolean(
                      formik.touched.message && formik.errors.message
                    )}
                    value={formik.values?.message}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions
          sx={{
            alignItems: "end",
            flexDirection: "column",
            bgcolor: "background.main",
          }}
        >
          <ReCAPTCHA
            sitekey={process.env.SITE_KEY}
            theme={theme.palette.mode}
            hl="fa"
            onChange={value => {
              formik.setFieldValue("recaptcha", value)
            }}
            style={{ alignSelf: "center" }}
          />
          {formik.errors.recaptcha && formik.touched.recaptcha && (
            <Typography variant="caption" color="error">
              {formik.errors.recaptcha}
            </Typography>
          )}
          <Button
            type="submit"
            color="success"
            variant="contained"
            sx={{ mt: 2 }}
            fullWidth
          >
            ارسال کن
          </Button>
        </CardActions>
      </form>
      <Typography
        dir="rtl"
        color={!serverState.ok ? "error" : "green"}
        sx={{
          bgcolor: "background.main",
        }}
      >
        {serverState.msg}
      </Typography>
    </>
  )
}

export default ContactForm
