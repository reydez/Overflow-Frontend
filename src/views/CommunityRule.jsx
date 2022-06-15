import { GifBox } from "@mui/icons-material";
import { List, ListItemText, Typography, Box, Button } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export function Communityrule() {
  return (
    <Container>
      <Typography variant="h4" align="center">
        Reglas de la comunidad
      </Typography>
      <br />
      
      <Typography
        variant="h5"
        component="div"
        sx={{ textDecoration: "underline" }}
      >
        <br />
        <br />
        Sobre la pagina
      </Typography>
      <Typography variant="h6" component="div" paragraph>
        <br />
        <br />
        <strong>Henry-Flow</strong> es la plataforma en donde esta necesidad de
        puntualizar la información se resuelve. Un foro interactivo donde
        podemos postear dudas, comentarlas, guardarlas en favoritos,
        compartirlas, hablar con otros estudiantes, y avanzar en la carrera cómo
        Full Stack Developer siguiendo el mismo lineamiento de la enseñanza que
        provee Henry. Además, cada pregunta y respuesta será puntuada por los
        mismos integrantes de la comunidad, en donde existirá un sistema de
        rating. Henry-Flow está apuntado tanto a estudiantes recién ingresados,
        estudiantes avanzados y hasta graduados Henrys que quieran aportar
        dentro de la comunidad de desarrolladores.
        <br />Y si no soy estudiante de la academia Henry? Henry-Flow está
        abierto a cualquier persona que desee tanto resolver sus dudas cómo
        compartir su conocimiento! Siguiendo la estructura dispuesta por la
        página, en donde se abarcaran tecnologías específicas y puntuales.
        <br />
        <br />
        
        <Typography variant='h7'>
          <List>
          <Link smooth to={'/reglas-comunidad#Respeto'} style={{ textDecoration: 'none' }} >
            <Box sx={{ color: "text.btnEdit",
                      textDecoration: 'underline',
                      marginLeft: "15px",
                      fontWeight: 900,
                      fontSize: '20px'
                      }}>
          1. Respeto a los Usuarios

            </Box>
            </Link>
            <Link smooth to={"/reglas-comunidad#Lenguaje"} style={{ textDecoration: 'none' }}>
              <ListItemText>
            <Box sx={{ color: "text.btnEdit",
                      color: "text.btnEdit",
                      textDecoration: 'underline',
                      marginLeft: "15px",
                      fontWeight: 900,
                      fontSize: '20px'}}>
              2. Lenguaje que incita al odio/Hate speech
            </Box>
            </ListItemText>
            </Link>
            <Link smooth to={"/reglas-comunidad#Acoso"} style={{ textDecoration: 'none' }}>
            <ListItemText >
              <Box  sx={{ 
                      color: "text.btnEdit",
                      textDecoration: 'underline',
                      marginLeft: "15px",
                      fontWeight: 900,
                      fontSize: '20px'}}>
               3. Acoso/Bullying
                </Box>
                </ListItemText>
            </Link>
          </List>
        </Typography>
        <Typography variant="h6" component="div" paragraph>
          <br />
          <br />
          <strong>Henry-Flow</strong> es un espacio para compartir información,
          conectarte con personas que compartan tus intereses y descubrir
          contenido de calidad creado por gente como tu. Consideramos que la
          libre expresión respetando a todos los miembros de la comunidad es el
          pilar fundamental de nuestra plataforma. Estas reglas básicas para
          toda la Comunidad son las que nos permitirán mantener un buen clima en
          la plataforma potenciando la creatividad y la interacción entre
          nuestros usuarios. Con este simple conjunto de reglas queremos hacer
          de Taringa un espacio seguro para todo tipo de personas. Estas
          políticas te ayudarán a comprender qué tipo de contenido se puede
          compartir en nuestra plataforma y cuál se puede reportar. Todos los
          contenidos o publicaciones que contengan alguno de los puntos
          enumerados en esta sección podrán ser reportados para su revisión y
          eliminados en caso de que no cumplir con las reglas de comunidad. Los
          autores de los contenidos eliminados podrán ser sancionados o
          expulsados del sitio.
        </Typography>
        <br />
        <br />
        <Typography variant="h5" component="div" id="Respeto">
          Respeto a otros usuarios
        </Typography>
        <br />
        <Typography variant="h6" component="div">
          Con el afán de que <strong>Henry-Flow</strong> sea un espacio donde
          haya respeto entre todos los usuarios no se permitirán las
          publicaciones que contengan las siguientes cosas:
        </Typography>
        <br />
        <Typography variant="h5" component="div" id="Lenguaje">
          Lenguaje que incita al odio/Hate speech
        </Typography>
        <br />
        <Typography variant="h6" component="div">
          Henry-Flow eliminará los contenidos que contengan lenguaje que incita
          al odio, es decir, todo contenido que ataca directamente a personas en
          función de lo siguiente:
          <List>
            <ListItemText>1. Grupo étnico</ListItemText>
            <ListItemText>2. Nacionalidad</ListItemText>
            <ListItemText>3. Religión</ListItemText>
            <ListItemText>4. Orientación sexual</ListItemText>
            <ListItemText>5. género o identidad de género</ListItemText>
            <ListItemText>6. Discapacidades o enfermedades graves</ListItemText>
            <ListItemText>7. Nacionalidad</ListItemText>
          </List>
        </Typography>
        <br />
        <Typography variant="h5" component="div" id="Acoso">
          Acoso/Bullying
        </Typography>
        <br />
        <Typography variant="h6" component="div">
          No toleramos el bullying ni el acoso. Puedes hablar con total libertad
          sobre cuestiones y personas de interés público, pero eliminaremos el
          contenido que parezca estar dirigido de manera deliberada hacia
          particulares con la intención de degradarlos o avergonzarlos.
        </Typography>
        <br />
      </Typography>
    </Container>
  );
}
