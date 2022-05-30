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

    <Container
    sx={{
     background: 'white',
     padding: '30px',
     position: 'absolute',
     top: '30%',
     left: '30%',
     width: '40%'
     }}>
      <Grid container component="form" sx={{ top: '20%'}}>
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
              style=
              {{

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
                  <Button 
                    sx={{
                      
                      borderRadius:'20px',
                      color: '#222831',
                      size: 'large',
                      width: '40%',
                      fontSize: '20px',
                      left: '30%',
                      textAlign: 'center',
                      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                      boxShadow: '0 3px 5px 2px rgba(255,105,135, .3)',
                    }}
                  variant="contained" color="secondary" fullWidth>
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

