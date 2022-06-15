import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
//import Item from '@mui/material/Item'
import ScrollTerms from "./ScrollTerms";
import ScrollAboutUs from "./ScrollAboutUs";
import ContactUs from "./ContactUs";
import { BorderAll } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer>
      <Box textAlign="center" >
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <ScrollTerms />
          </Grid>
          <Grid item xs={1}>
            <ScrollAboutUs />
          </Grid>
          <Grid item xs={3}>
            <ContactUs />
          </Grid>
        </Grid>
        <Box sx={{ marginLeft:13, color: 'text.btnEdit', fontWeight: 500}}>
          HenryFlow-Developers  &reg; {new Date().getFullYear()}
        </Box>
      </Box>
    </footer>
  );
}
