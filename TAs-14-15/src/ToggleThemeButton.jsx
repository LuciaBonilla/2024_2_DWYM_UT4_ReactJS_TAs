import { UseThemeContext } from "./ThemeProvider.jsx";

function ToggleThemeButton() {
    const { toggleTheme } = UseThemeContext();

    return (
        <button onClick={toggleTheme}>Cambiar de tema</button>
    );
}

export default ToggleThemeButton;