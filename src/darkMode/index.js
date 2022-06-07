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
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
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
      default: "#fff",
      dark: '#E8B5D0',


    },
    text: {
      primary: "#392E57",
      secondary: "#7165A0",
    }
  },
  dark: {
    background: {
      default: "#392E57",
      dark: '#BEB0D1'
    },

    text: {
      primary: "#fff"
    }
  }
}





export const ColorContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleMode: () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
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
