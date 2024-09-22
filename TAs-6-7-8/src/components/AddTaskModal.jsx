import { useState } from "react";

import { useTasksContext } from "./TaskManager";

function AddTaskModal({ isShowing, handleHideModal }) {
    /**
     * ESTADOS: Para cada input.
     */
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [assignedTo, setAssignedTo] = useState("");
    const [priority, setPriority] = useState("High");
    const [status, setStatus] = useState("Backlog");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    /**
     * EVENTO: Limpia los inputs.
     */
    function handleCleanInputs() {
        setTitle("");
        setDescription("");
        setAssignedTo("");
        setPriority("High");
        setStatus("Backlog");
        setStartDate("");
        setEndDate("");
    }

    /**
     * EVENTO: Añade una nueva tarea.
     */
    const { handleAddTask } = useTasksContext();

    return (
        <div className={`add-task-modal ${isShowing ? "over" : "down"}`}>
            <form className="add-task-modal-form">
                {/* Formulario. */}
                <label className="add-task-modal-form__input add-task-modal-form__input--title">
                    TÍTULO
                    <input
                        type="text"
                        placeholder="TÍTULO"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label className="add-task-modal-form__input add-task-modal-form__input--description">
                    DESCRIPCIÓN
                    <input
                        type="text"
                        placeholder="DESCRIPCIÓN"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <label className="add-task-modal-form__input add-task-modal-form__input--assignedTo">
                    ASIGNADO
                    <input
                        type="text"
                        placeholder="ASIGNADO"
                        value={assignedTo}
                        onChange={(e) => setAssignedTo(e.target.value)}
                    />
                </label>
                <label className="add-task-modal-form__input add-task-modal-form__input--priority">
                    PRIORIDAD
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>
                </label>
                <label className="add-task-modal-form__input add-task-modal-form__input--status">
                    ESTATUS
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option>Backlog</option>
                        <option>To Do</option>
                        <option>In Progress</option>
                        <option>Blocked</option>
                        <option>Done</option>
                    </select>
                </label>
                <label className="add-task-modal-form__input add-task-modal-form__input--startDate">
                    FECHA DE INICIO
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </label>
                <label className="add-task-modal-form__input add-task-modal-form__input--endDate">
                    FECHA DE FIN
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </label>

                {/* Botón para cancelar el añadir tarea. */}
                <button className="add-task-modal-form__button add-task-modal-form__button--cancel-task" onClick={(event) => {
                    event.preventDefault();
                    handleHideModal();
                    handleCleanInputs();
                }}>CANCELAR</button>

                {/* Botón para añadir tarea. */}
                <button className="add-task-modal-form__button add-task-modal-form__button--accept-task" onClick={(event) => {
                    event.preventDefault();
                    handleAddTask(
                        {
                            title: title,
                            description: description,
                            assignedTo: assignedTo,
                            priority: priority,
                            status: status,
                            startDate: startDate,
                            endDate: endDate,
                        }
                    );
                    handleHideModal();
                    handleCleanInputs()
                }}>+ AÑADIR</button>
            </form>
        </div>
    );
}

export default AddTaskModal;