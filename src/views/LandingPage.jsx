import { Button, Chip, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from './LandingPage/Components/About';
import imagen from "../imagen/Frame 3.png"
import imagenLanding from "../imagen/imagen-lateral.jpg";
import estilo from "../imagen/unnamed.png";

function LandingPage() {
  return (
    <div>
    <img  src={imagen} alt="Imagen" width="100%" height="100%" cover="100%">
    </img>
    <Typography variant="h2" style={{
        position: "absolute",
        top: "20%",
        left: "10%",
        color: "black",
        fontFamily: "monospace",
        }}>
    Bienvenido a <br/>
       <spam style={{color: "red",}}>Henry-Flow</spam>
    </Typography >
    <Typography variant="h5" style={{
        position: "absolute",
        top: "50%",
        left: "10%",
        color: "black",
        fontFamily: "monospace"}}>
      La pagina diseñada por y para alumnos<br/>
       de Henry.
    </Typography>

    <Typography variant="text" style={{color: "#121858"}}></Typography>
      <Link to='/questions' >
      <Button size="large" style={{
        position: "absolute",
        top: "500px",
        left: "200px",
        }}>
        <Chip color="error"  label="Ingrese"size="large"/>
      </Button>
      </Link>

      <Button size="large" style={{
        position: "absolute",
        top: "500px",
        left: "300px",
        }}>
        <Chip color="error" label="About Us" />
      </Button>
      <img  src={imagenLanding} alt="Imagen" width={700} style={{
        position: "absolute",
        top: "10px",
        left: "50%",
        borderRadius: "50%"}}></img>
        <img  src={estilo} alt="Imagen" width={100} style={{
        position: "absolute",
        top: "100px",
        left: "50%",
        borderRadius: "50%"}}></img>
        <Typography variant="h5" style={{
        position: "absolute",
        top: "75%",
        left: "60%",
        color: "black",
        fontFamily: "monospace"}}>Comunidad de Software Developer</Typography>

        
    </div>
  );
}

export default LandingPage;