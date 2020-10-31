// import Start from "./components/Start/Start";
import ArtworkComments from "./components/ArtworkComments/ArtworkComments";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Start from './components/Start/Start'
import { useEffect, useState } from 'react'
import callingApi from './data'
import { GlobalProvider } from "./context/GlobalState";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
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
    <Router>
      <GlobalProvider>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/comments">
              <ArtworkComments />
            </Route>
            <Route path="/">
              <Start />
            </Route>
          </Switch>

        </ThemeProvider>
      </GlobalProvider></Router>
  )
}

export default App
