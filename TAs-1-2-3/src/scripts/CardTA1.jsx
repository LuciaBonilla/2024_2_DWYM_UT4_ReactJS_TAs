function CardTA1({ title, description, assignedTo, startDate, endDate }) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p><strong>Descripción:</strong> {description}</p>
            <p><strong>Asignada a:</strong> {assignedTo}</p>
            <p><strong>Fecha de inicio:</strong> {startDate}</p>
            <p><strong>Fecha de fin:</strong> {endDate}</p>
        </div>
    );
}

export default CardTA1;