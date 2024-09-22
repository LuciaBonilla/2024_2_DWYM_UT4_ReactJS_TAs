import { useEffect, useState } from "react";

import { useTasksContext } from "./TaskManager";

function ChangeTaskModal({ isShowing, handleHideModal }) {
    const { tasks, taskToEditID, setTaskToEditID } = useTasksContext();

    // Estados: Para cada input.
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [assignedTo, setAssignedTo] = useState("");
    const [priority, setPriority] = useState("");
    const [status, setStatus] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(() => {
        const taskToEdit = tasks.find((task) => task.id === taskToEditID);
        if (taskToEdit !== undefined && taskToEdit !== null) {
            setTitle(taskToEdit.title);
            setDescription(taskToEdit.description);
            setAssignedTo(taskToEdit.assignedTo);
            setPriority(taskToEdit.priority);
            setStatus(taskToEdit.status);
            setStartDate(taskToEdit.startDate);
            setEndDate(taskToEdit.endDate);
        }
    }, [taskToEditID])

    /**
     * EVENTO: Edita la tarea actual que se está editando.
     */
    const { handleEditTask } = useTasksContext();

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

    return (
        <div className={`change-task-modal ${isShowing ? "over" : "down"}`}>
            <form className="change-task-modal-form">
                {/* Formulario. */}
                <label className="change-task-modal-form__input change-task-modal-form__input--title">
                    TÍTULO
                    <input
                        type="text"
                        placeholder="TÍTULO"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label className="change-task-modal-form__input change-task-modal-form__input--description">
                    DESCRIPCIÓN
                    <input
                        type="text"
                        placeholder="DESCRIPCIÓN"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <label className="change-task-modal-form__input change-task-modal-form__input--assignedTo">
                    ASIGNADO
                    <input
                        type="text"
                        placeholder="ASIGNADO"
                        value={assignedTo}
                        onChange={(e) => setAssignedTo(e.target.value)}
                    />
                </label>
                <label className="change-task-modal-form__input change-task-modal-form__input--priority">
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
                <label className="change-task-modal-form__input change-task-modal-form__input--status">
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
                <label className="change-task-modal-form__input change-task-modal-form__input--startDate">
                    FECHA DE INICIO
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </label>
                <label className="change-task-modal-form__input change-task-modal-form__input--endDate">
                    FECHA DE FIN
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </label>

                {/* Botón para cancelar el editar tarea. */}
                <button className="change-task-modal-form__button change-task-modal-form__button--cancel-task" onClick={(event) => {
                    event.preventDefault();
                    handleHideModal();
                    handleCleanInputs();
                    setTaskToEditID(null);
                }}>CANCELAR</button>

                {/* Botón para editar tarea. */}
                <button className="change-task-modal-form__button change-task-modal-form__button--edit-task" onClick={(event) => {
                    event.preventDefault();
                    handleEditTask(
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
                    setTaskToEditID(null);
                }}>+ EDITAR</button>
            </form>
        </div>
    );
}

export default ChangeTaskModal;