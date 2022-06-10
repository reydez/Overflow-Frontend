import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  MenuItem,
  InputLabel,
  Select,
  CardActions,
  Button,
  CardHeader,
  FormControl,
} from "@mui/material"

import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { TextField } from "formik-material-ui"


const initialValues = {
  firstName: "",
  lastName: "",
  role: "",
  twitter: "",
  github: "",
  portfolio: "",
  linkedin: ""
}

const options = [
  { label: "Student", value: "student" },
  { label: "Henry Hero", value: "henry_hero", },
  { label: "Technical Assitance", value: "technical_assitance" },
  { label: "Henry Mentor", value: "henry_mentor" },
  { label: "Instructor", value: "instructor" },
  { label: "Staff Henry", value: "staff_henry" },
  { label: "Graduate", value: "graduate" },
]

//linkedin validation
// const lowercaseRegEx = /(?=.*[a-z])/
// const uppercaseRegEx = /(?=.*[A-Z])/
// const numericRegEx = /(?=.*[0-9])/
// const lengthRegEx = /(?=.{6,})/

//validation schema
let validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  portfolio: Yup.string().required("Required"),
  linkedin: Yup.string().required("Required!"),
  // .matches(
  //   lowercaseRegEx,
  //   "Must contain one lowercase alphabetical character!"
  // )
  // .matches(
  //   uppercaseRegEx,
  //   "Must contain one uppercase alphabetical character!"
  // )
  // .matches(numericRegEx, "Must contain one numeric character!")
  // .matches(lengthRegEx, "Must contain 6 characters!")

})



export const EditUserProfile = ({ changeToFalse, setEditMode, setInformationProfile }) => {


  const onSubmit = (values) => {
    console.log(values)
    setInformationProfile(values)
  }

  const cancelEdit = () => {
    setEditMode(false)
    console.log('he sido clikeado')
  }
  return (


    <Grid container justify="center" spacing={1}>
      <Grid item md={6}>
        <Card
          sx={{
            backgroundColor: 'background.default',
            width: '100vh',
            padding: '3px'
          }}
        >
          <CardHeader title="Editar datos de perfil"></CardHeader>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >

            {({ dirty, isValid, values, handleChange, handleBlur }) => {
              return (
                <Form>
                  <CardContent>
                    <Grid item container spacing={1} justify="center">
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="First Name"
                          variant="outlined"
                          fullWidth
                          name="firstName"
                          value={values.firstName}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Last Name"
                          variant="outlined"
                          fullWidth
                          name="lastName"
                          value={values.lastName}
                          component={TextField}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={12}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="demo-simple-select-outlined-label">
                            role
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Occupation"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.occupation}
                            name="occupation">
                            <MenuItem>None</MenuItem>
                            {options.map((item) => (
                              <MenuItem key={item.value} value={item.value}>
                                {item.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Twitter"
                          variant="outlined"
                          fullWidth
                          name="twitter"
                          value={values.twitter}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Github"
                          variant="outlined"
                          fullWidth
                          name="github"
                          value={values.github}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Portfolio"
                          variant="outlined"
                          fullWidth
                          name="portfolio"
                          value={values.portfolio}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Linkedin"
                          variant="outlined"
                          fullWidth
                          name="linkedin"
                          value={values.linkedin}
                          // type="linkedin"
                          component={TextField}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button
                      disabled={!dirty || !isValid}
                      variant="contained"
                      color="primary"
                      type="Submit"
                      sx={{
                        padding: '1px'
                      }}
                    >
                      REGISTER
                    </Button>
                    <Button
                      onClick={cancelEdit}
                      // disabled={!dirty || !isValid}
                      variant="contained"
                      color="primary"
                      type="Submit"
                      sx={{
                        padding: '1px'
                      }}
                    >
                      Cancel
                    </Button>
                  </CardActions>
                </Form>
              )
            }}
          </Formik>
        </Card>
      </Grid>
    </Grid>


  )
}


