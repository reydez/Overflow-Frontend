import { List, ListItemText, Typography } from "@mui/material";
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
      <br />
      <br />
      <Typography
        variant="h5"
        component="div"
        paragraph
        sx={{ textDecoration: "underline" }}
      >
        Nuestra vision
      </Typography>
      <Typography variant="h6" component="div" paragraph>
        <br />A lo largo de la cursada en Henry, todos nosotros en algún momento
        nos hemos encontrado con la necesidad de despejar nuestras dudas acerca
        de los diferentes temas que a diario aprendemos en el bootcamp, o
        resolver errores de nuestro código que tanto nos costó diseñar y que nos
        supera cómo programadores (el momento donde simplemente… Crash!!
        SyntaxError, TypeError, NaN, Maximum call size y un largo etcétera). Es
        ahí donde simplemente deseamos una respuesta, un ejemplo de uso correcto
        o una explicación del tema que no nos deja dormir. Indagando por
        diversas plataformas del internet encontramos una marea de información:
        diversos lenguajes de programación, tecnologías que aún no sabemos ni el
        porqué de su existencia y por fin… nuestra respuesta!! hasta que nos
        damos cuenta que se trata de un método deprecado o de un lenguaje
        distinto al que utilizamos(seguimos nuestra búsqueda cómo barco a la
        deriva en el océano infinito del internet). Agregando a esto, ¿cuántas
        veces, cómo estudiantes Henry, encontramos lo que necesitábamos pero
        esta información estaba únicamente en Inglés? La información abunda, es
        libre, gratuita y enriquecedora, pero cómo estudiantes tenemos esa misma
        problemática: La información abunda, necesitamos puntualizar.
      </Typography>
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
        
        <Typography>
          <List>
          <Link smooth to={'/reglas-comunidad#Respeto'} >
          1. Respeto a los Usuarios
            </Link>
            <Link smooth to={"/reglas-comunidad#Lenguaje"}>
            <ListItemText >
              2. Lenguaje que incita al odio/Hate speech
            </ListItemText>
            </Link>
            <Link smooth to={"/reglas-comunidad#Acoso"}>
            <ListItemText >3. Acoso/Bullying</ListItemText>
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
