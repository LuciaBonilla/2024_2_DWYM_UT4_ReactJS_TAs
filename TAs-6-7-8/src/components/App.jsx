import { createContext, useContext, useState } from "react";

/**
 * Componentes auxiliares.
 */
import { TaskManager } from "./TaskManager.jsx";
import TasksContainer from "./TasksContainer.jsx";
import AddTaskModal from "./AddTaskModal.jsx";
import ChangeTaskModal from "./ChangeTaskModal.jsx";

/**
 * Estilos.
 */
import "../styles/App.css";

/**
 * CONTEXTO: Funciones para mostrar u ocultar el modal de Editar Tarea.
 */
const ShowAndHideChangeTaskModalActions = createContext();

export function App() {
  /**
   * ESTADO: Indica al modal de Añadir Tarea si debe mostrarse. Arranca debajo de todos los componentes.
   */
  const [isShowingAddTaskModal, setIsShowingAddTaskModal] = useState(false);

  /**
   * ESTADO: Indica al modal de Editar Tarea si debe mostrarse. Arranca debajo de todos los componentes.
   */
  const [isShowingChangeTaskModal, setIsShowingChangeTaskModal] = useState(false);

  /**
   * EVENTO: Indica al modal de Añadir Tarea que se debe mostrar, es decir, ponerse encima de todos los componentes.
   */
  function handleShowAddTaskModal() {
    setIsShowingAddTaskModal(true);
  }

  /**
   * EVENTO: Indica al modal de Añadir Tarea que se debe ocultar, es decir, ponerse debajo de todos los componentes.
   */
  function handleHideAddTaskModal() {
    setIsShowingAddTaskModal(false);
  }

  /**
   * EVENTO: Indica al modal de Editar Tarea que se debe mostrar, es decir, ponerse encima de todos los componentes.
   */
  function handleShowChangeTaskModal() {
    setIsShowingChangeTaskModal(true);
  }

  /**
   * EVENTO: Indica al modal de Editar Tarea que se debe ocultar, es decir, ponerse debajo de todos los componentes.
   */
  function handleHideChangeTaskModal() {
    setIsShowingChangeTaskModal(false);
  }

  // PÁGINA PRINCIPAL.
  return (
    <div className="app">
      {/* Botón para mostrar el modal de Añadir Tarea. */}
      <button className="show-add-task-modal-button" onClick={handleShowAddTaskModal}>+ AÑADIR TAREA</button>

      <ShowAndHideChangeTaskModalActions.Provider value={{ handleShowChangeTaskModal, handleHideChangeTaskModal }}>
        <TaskManager>
          {/* Modal de Añadir Tarea. */}
          <AddTaskModal isShowing={isShowingAddTaskModal} handleHideModal={handleHideAddTaskModal} />

          {/* Modal de Editar Tarea. */}
          <ChangeTaskModal isShowing={isShowingChangeTaskModal} handleHideModal={handleHideChangeTaskModal} />

          {/* Container de tareas. */}
          <TasksContainer />
        </TaskManager>
      </ShowAndHideChangeTaskModalActions.Provider>
    </div>
  );
}

export function useShowAndHideChangeTaskModalActions() {
  return useContext(ShowAndHideChangeTaskModalActions);
}