import { Formik } from "formik";
import * as Yup from "yup";
import { Container, Grid, Button, Typography } from "@mui/material";
import TextFields from "../Controllers/textField";
import { Link } from 'react-router-dom'

export default function FormUser() {

  const validate = Yup.object({

    email: Yup.string().required("Email is required.").email("Email formated."),
    password: Yup.string()
      .required("Password is required.")
      .max(8, "Name should be less than 8."),
  });
  return (

    <Container sx={{ background: 'white', padding: '30px', position: 'absolute', top: '30%', left: '10%' }}>
      <Grid container component="form" sx={{ top: '20%' }}>
        <Grid item xs={12}>
          <Typography variant="h6" component="div" align="center">
            Sign in
          </Typography>
        </Grid>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
          }}
          validationSchema={validate}
        >
          {(fomik) => {
            return (
              <div
                style={{
                  width: "100%"
                }}
              >
                <TextFields
                  type="text"
                  // value
                  lable="Email"
                  name="email"
                />
                <TextFields
                  type="password"
                  // value
                  lable="Password"
                  name="password"
                />
                <Link to="/questions">
                  <Button variant="contained" color="secondary" fullWidth>
                    Submit
                  </Button>
                </Link>
              </div>
            );
          }}
        </Formik>
      </Grid>
    </Container>

  );
}

