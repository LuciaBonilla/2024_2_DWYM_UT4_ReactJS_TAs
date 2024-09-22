function Task({ id, title, description, assignedTo, priority, status, startDate, endDate, deleteMe, changeTaskToEditIDWithMyID }) {
    return (
        <li key={id} id={id} className="task">
            <h2>{title}</h2>
            <p><strong>Descripción:</strong> {description}</p>
            <p><strong>Asignado:</strong> {assignedTo}</p>
            <p><strong>Prioridad:</strong> {priority}</p>
            <p><strong>Estatus:</strong> {status}</p>
            <p><strong>Fecha de inicio:</strong> {startDate}</p>
            <p><strong>Fecha de fin:</strong> {endDate}</p>
            <button className="task__button task__button--delete-task" onClick={deleteMe}>ELIMINAR</button>
            <button className="task__button task__button--edit-task" onClick={changeTaskToEditIDWithMyID}>EDITAR</button>
        </li>
    );
}

export default Task;