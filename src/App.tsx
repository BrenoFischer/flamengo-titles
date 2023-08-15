import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Title from './routes/Title'
import { LanguageContextProvider } from './contexts/LanguageContext'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <LanguageContextProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="title/:category/:year" element={<Title />} />
        </Routes>
      </LanguageContextProvider>
    </ThemeProvider>
  )
}
