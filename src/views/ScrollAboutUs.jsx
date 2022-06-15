
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ScrollAboutUs() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button onClick={handleClickOpen('paper')} sx={{ color: "#a8a3b5", "&:hover": { color: "#F50057" } }}>Nosotros</Button>
      
     
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Nosotros</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
         
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[Array(40)]
              .map(
                () => `A lo largo de la cursada en Henry, todos nosotros en algún momento nos hemos encontrado con la necesidad de despejar nuestras dudas acerca de los diferentes temas que a diario aprendemos en el bootcamp, o resolver errores de nuestro código que tanto nos costó diseñar y que nos supera cómo programadores (el momento donde simplemente… Crash!! SyntaxError, TypeError, NaN, Maximum call size y un largo etcétera). Es ahí donde simplemente deseamos una respuesta, un ejemplo de uso correcto o una explicación del tema que no nos deja dormir. Indagando por diversas plataformas del internet encontramos una marea de información: diversos lenguajes de programación, tecnologías que aún no sabemos ni el porqué de su existencia y por fin… nuestra respuesta!! hasta que nos damos cuenta que se trata de un método deprecado o de un lenguaje distinto al que utilizamos(seguimos nuestra búsqueda cómo barco a la deriva en el océano infinito del internet). Agregando a esto, ¿cuántas veces, cómo estudiantes Henry, encontramos lo que necesitábamos pero esta información estaba únicamente en Inglés? 
                La información abunda, es libre, gratuita y enriquecedora, pero cómo estudiantes tenemos esa misma problemática: La información abunda, necesitamos puntualizar.
                HenryOverflow es la plataforma en donde esta necesidad de puntualizar la información se resuelve. Un foro interactivo donde podemos postear dudas, comentarlas, guardarlas en favoritos, compartirlas, hablar con otros estudiantes, y avanzar en la carrera cómo Full Stack Developer siguiendo el mismo lineamiento de la enseñanza que provee Henry. Además, cada pregunta y respuesta será puntuada por los mismos integrantes de la comunidad, en donde existirá un sistema de rating.
                HenryOverflow está apuntado tanto a estudiantes recién ingresados, estudiantes avanzados y hasta graduados Henrys que quieran aportar dentro de la comunidad de desarrolladores. 
                
                Y si no soy estudiante de la academia Henry? HenryOverflow está abierto a cualquier persona que desee tanto resolver sus dudas cómo compartir su conocimiento! Siguiendo la estructura dispuesta por la página, en donde se abarcaran tecnologías específicas y puntuales.
                `,
              )
              .join('\n')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
