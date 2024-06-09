import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Home } from "./Pages/Home";
import { theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/Global.js"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])


export function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
      <GlobalStyle />
    </ThemeProvider>
  )
}
