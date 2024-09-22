import './App.css'
import { ThemeProvider } from './ThemeProvider.jsx'
import ToggleThemeButton from './ToggleThemeButton.jsx'
import ThemeParagraph from './ThemeParagraph.jsx'
import { LanguageProvider } from './LanguageProvider.jsx'
import LanguageSelector from './LanguageSelector.jsx'
import LanguageParagraph from './LanguageParagraph.jsx'

function App() {


  return (
    <>
      <ThemeProvider>
        <ToggleThemeButton />
        <ThemeParagraph />
      </ThemeProvider>

      <LanguageProvider>
        <LanguageSelector />
        <LanguageParagraph />
      </LanguageProvider>
    </>
  )
}

export default App