// import Start from "./components/Start/Start";
import ArtworkComments from "./components/ArtworkComments/ArtworkComments";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { useEffect, useState } from 'react'
import callingApi from './data'
import { GlobalProvider } from "./context/GlobalState";

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
  // useEffect(() => {
  //   callingApi().then(res => {
  //     console.log(res)
  //     setState({ ...state, comments: res, loading: false })
  //   })

  // }, [])
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <ArtworkComments  />
      </ThemeProvider>
    </GlobalProvider>
  )
}

export default App
