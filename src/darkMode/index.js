import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, useState , useMemo} from "react";

export const ColorModeContext = createContext({
  toggleMode: () => {},
  mode: "light",
});

const themeObj = {
    light: {
        background: {
            default: "#F7FBFE"
        },
       
        
    },
    dark: {
        background: {
            default: "#392E57",
        },
        
    }
}

const themeText = {
  light: {
    text: {
      primary: "#392E57"
    }
  },
  dark: {
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
      ...themeObj [mode],
      
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
