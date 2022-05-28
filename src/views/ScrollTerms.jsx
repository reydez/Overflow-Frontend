import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ScrollTerms() {
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
      <Button onClick={handleClickOpen('paper')}>Terminos y Condiciones</Button>
     
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Terminos y Condiciones</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[Array(40)]
              .map(
                () => `Al usar nuestros productos, usted acepta nuestros Términos de servicio.

                Stack Overflow Network es un conjunto de sitios de Internet relacionados y otras aplicaciones para preguntas y respuestas (también denominadas en el presente como la "Red"), propiedad de Stack Exchange, Inc. ("Stack Overflow", "nosotros" o " nosotros”), una corporación de Delaware. Stack Overflow te da la bienvenida a Network, la comunidad de desarrolladores más grande del mundo, y te invita a participar en la comunidad compartiendo conocimientos con tus compañeros y colegas. Como todas las comunidades, le pedimos que participe de una manera que respete a los demás miembros de la comunidad. Con ese fin, le proporcionamos estos términos de servicio para informarle sobre las obligaciones legales que asume cuando se involucra con la comunidad de Stack Overflow o cuando accede o usa la Red pública o cualquier servicio provisto en la Red pública (colectivamente, "Servicios ”).
                
                En la medida en que acceda o utilice nuestros otros productos en nombre de una Empresa o Equipo, lo que incluye, entre otros, el registro de una cuenta en nombre de una Empresa o Equipo, su uso de esos productos (como Stack Overflow para Teams o Stack Overflow Business) se rige por sus correspondientes Términos y Condiciones.`,
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
