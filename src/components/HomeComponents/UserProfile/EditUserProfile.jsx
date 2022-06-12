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
import { updateUserProfile } from '../../../redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';



const initialValues = {
  first_name: "",
  last_name: "",
  role: "",
  twitter: "",
  github: "",
  portfolio: "",
  linkedin: ""
}

const options = [
  { label: "Student", value: "Student" },
  { label: "Henry Hero", value: "Henry hero", },
  { label: "Technical Assitance", value: "Technical assitance" },
  { label: "Henry Mentor", value: "Henry mentor" },
  { label: "Instructor", value: "Instructor" },
  { label: "Staff Henry", value: "Staff henry" },
  { label: "Graduate", value: "Graduate" },
]

let validationSchema = Yup.object().shape({
  first_name: Yup.string(),
  last_name: Yup.string(),
  portfolio: Yup.string().matches(
    /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
    'Enter correct url!'
  ),
  linkedin: Yup.string().matches(
    /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
    'Enter correct url!'
  ),
  twitter: Yup.string().matches(
    /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
    'Enter correct url!'
  ),
  github: Yup.string().matches(
    /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
    'Enter correct url!'
  ),
})

// ((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_-]+=[a-zA-Z0-9-%]+&?)?$

export const EditUserProfile = ({ setEditMode, setInformationProfile }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);


  // Object.keys(dog).length


  const onSubmit = (values) => {
    setInformationProfile(values);
    dispatch(updateUserProfile(values, user.id));
    setEditMode(false);
  }

  const cancelEdit = () => {
    setEditMode(false)
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
                          label="Nombres"
                          variant="outlined"
                          fullWidth
                          name="first_name"
                          value={values.first_name}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Apellido"
                          variant="outlined"
                          fullWidth
                          name="last_name"
                          value={values.last_name}
                          component={TextField}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={12}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="demo-simple-select-outlined-label">
                            Role
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Role"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.role}
                            name="role">
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
                      Registrar
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


