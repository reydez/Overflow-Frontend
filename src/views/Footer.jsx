import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
//import Item from '@mui/material/Item'
import ScrollTerms from "./ScrollTerms";
import ScrollAboutUs from "./ScrollAboutUs";
import ContactUs from "./ContactUs";

export default function Footer() {
  return (
    <footer>
      <Container sx={{
                marginTop: 'auto',
                color: '#a8a3b5',
                backgroundColor: '#392e57',
             
                }}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <ScrollTerms />
          </Grid>
          <Grid item xs={4}>
            <ScrollAboutUs />
          </Grid>
          <Grid item xs={2}>
            <ContactUs />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
