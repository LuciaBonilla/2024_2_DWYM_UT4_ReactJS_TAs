import { useTasksContext } from "./TaskManager.jsx";

import Task from "./Task.jsx";

function TasksContainer() {
    const { tasks } = useTasksContext();

    return (
        <div className="tasks-container">
            <h1 className="tasks-container__title">TAREAS</h1>
            <ul className="tasks-container__list">
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        description={task.description}
                        assignedTo={task.assignedTo}
                        priority={task.priority}
                        status={task.status}
                        startDate={task.startDate}
                        endDate={task.endDate}
                        deleteMe={task.deleteMe}
                        changeTaskToEditIDWithMyID={task.changeTaskToEditIDWithMyID}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TasksContainer;