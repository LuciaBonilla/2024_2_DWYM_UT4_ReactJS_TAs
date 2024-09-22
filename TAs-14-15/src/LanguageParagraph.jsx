import { useLanguageContext } from "./LanguageProvider.jsx";

function LanguageParagraph() {
    const { language } = useLanguageContext();

    function translate() {
        switch (language) {
            case ("es"):
                return "Hola, Mundo";
            case ("en"):
                return "Hello, World";
            case ("ja"):
                return "こんにちは世界";
            case ("zh"):
                return "你好世界";
            default:
                return "Hola, Mundo";
        }
    }

    return (
        <p>{translate(language)}</p>
    );
}

export default LanguageParagraph;