import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, useState, useMemo } from "react";

export const ColorModeContext = createContext({
  toggleMode: () => { },
  mode: "light",
});

const themeObj = {

  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
      typography: {
        fontFamily: [
          '"Segoe UI"',
          'Arial',
          'sans-serif',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
    },
  },
  light: {
    background: {
      default: "#F9FAFE",
      white: '#EBEFFE', // color del barleft
      violet: '#7165A0', // color del avatar
      fondoPerfil: '#f4f4f4',
      profilePhotos: '#EBEFFE',
      mapeado: "#EBEFFE",
      informationProfile: '#F4F4F4',
      buttons: '#EBEFFE'
    },
    text: {
      primary: "#7165A0",
      secondary: "#7165A0", //color de texto en el nombre del perfil
      btnEdit: "#7165A0"
    }
  },
  dark: {
    background: {
      default: "#413A66",  // Fondo Principal
      violet: "#392E57", // Eh Home solo para el fondo de M1-M2-M3-M4
      white: "#392E57", // LefBar Background
      fondoPerfil: '#392E57',
      profileGrid: '#4B4171', // recuadros del profile
      profilePhotos: '#423B67', // recuadros del profile
      mapeado: "#423B67",
      informationProfile: '#392E57',
      buttons: '#392E57'
    },
    // #423B67
    text: {
      primary: "#fff",
      secondary: '#A8A3B5',
      btnEdit: '#BDD96C',       //boton de editar el perfil

    }
  }
}





export const ColorContextProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleMode: () =>
        setMode((prevMode) => (prevMode === "dark" ? "light" : "dark")),
      mode,
    }),
    [mode]
  );

  const theme = useMemo(() => createTheme({
    palette: {
      mode: mode,
      ...themeObj[mode],

    },
  }), [mode])
  // const theme = createTheme({
  //   palette: {
  //     mode: mode,
  //     ...themeObj[mode],
  //   },
  // });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
