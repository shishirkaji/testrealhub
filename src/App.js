// import Start from "./components/Start/Start";
import ArtworkComments from "./components/ArtworkComments/ArtworkComments";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        "Merriweather",
        "Nunito",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <ArtworkComments />
    </ThemeProvider>
  );
}

export default App;
