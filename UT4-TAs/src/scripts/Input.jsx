import { useState } from "react";

function Input() {
    const [text, setText] = useState(null);

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="text-input">
            <textarea
                type="text"
                placeholder="ESCRIBA AQUÍ..."
                onChange={handleInputChange}
            />
            <p>TEXTO: {text}</p>
        </div>
    );
}

export default Input;