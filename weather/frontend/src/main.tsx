import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'

const theme = {
  // Define your theme properties here, e.g.:
  // colors: {
  //   primary: 'blue',
  //   secondary: 'gray',
  // },
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
