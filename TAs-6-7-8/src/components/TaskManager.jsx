import { useState, createContext, useContext } from "react";

import { useShowAndHideChangeTaskModalActions } from "./App";

/**
 * CONTEXTO: Los componentes descendientes comparten este contexto, el cual se refiere a las tareas y ciertas acciones relacionadas (añadir, eliminar, editar).
 * No hace falta pasar la acción de eliminar tarea porque ya la asocia a cada tarea, mientras que añadir tarea y editar tarea se asocia a los modales.
 * 
 * Incluye:
 * - tareas
 * - añadir tarea
 * - editar tarea
 * - ID de la tarea actual a editar
 * - método para cambiar la ID de la tarea actual a editar
 */
const TasksContext = createContext();

export function TaskManager({ children }) {
    /**
     * ESTADO: Tareas.
     */
    const [tasks, setTasks] = useState([]);

    /**
     * ESTADO: ID de la nueva tarea. Arranca en 0.
     */
    const [newTaskID, setNewTaskID] = useState(0);

    /**
     * ESTADO: ID de la tarea a editar.
     */
    const [taskToEditID, setTaskToEditID] = useState(null);

    /**
     * EVENTO: Para mostrar el modal de Editar Tarea.
     */
    const { handleShowChangeTaskModal } = useShowAndHideChangeTaskModalActions();

    /**
     * EVENTO: Añade una nueva tarea y le asocia comportamiento.
     * @param {*} newTaskData 
     */
    function handleAddTask(newTaskData) {
        setTasks((prevTasks) => [...prevTasks,
        {
            ...newTaskData,
            id: newTaskID,
            deleteMe: function () {
                handleDeleteTask(newTaskID);
            },
            changeTaskToEditIDWithMyID: function () {
                setTaskToEditID(newTaskID);
                handleShowChangeTaskModal();
            }
        }
        ]);
        setNewTaskID(newTaskID + 1);
    }

    /**
     * EVENTO: Elimina una tarea por la ID.
     * @param {*} taskToDeleteID 
     */
    function handleDeleteTask(taskToDeleteID) {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskToDeleteID));
    }

    /**
     * EVENTO: Edita la tarea actual a editar.
     * @param {*} updatedTaskData 
     */
    function handleEditTask(updatedTaskData) {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskToEditID ? { ...task, ...updatedTaskData } : task
            )
        );
        setTaskToEditID(null);
    }

    return (
        <TasksContext.Provider value={{ tasks, handleAddTask, handleEditTask, taskToEditID, setTaskToEditID }}>
            {children}
        </TasksContext.Provider>
    );
}

export function useTasksContext() {
    return useContext(TasksContext);
}