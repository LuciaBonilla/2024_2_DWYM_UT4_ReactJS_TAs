import { UseThemeContext } from "./ThemeProvider.jsx";

function ThemeParagraph() {
    const { theme } = UseThemeContext();

    return (
        <p className={theme}>En modo {theme}</p>
    );
}

export default ThemeParagraph;