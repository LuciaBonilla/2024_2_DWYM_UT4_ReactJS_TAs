// TA 4
function Button({ onClick, actionName }) {
    return (
        <button onClick={onClick}>{actionName}</button>
    );
}

export default Button;