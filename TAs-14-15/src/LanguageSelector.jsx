import { useLanguageContext } from "./LanguageProvider.jsx";

function LanguageSelector() {
    const { changeLanguage } = useLanguageContext();

    return (
        <select defaultValue="es" onChange={(event) => { changeLanguage(event.target.value) }}>
            <option>es</option>
            <option>en</option>
            <option>ja</option>
            <option>zh</option>
        </select>
    );
}

export default LanguageSelector;