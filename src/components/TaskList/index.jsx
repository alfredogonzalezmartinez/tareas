import PropTypes from "prop-types";
import React, { Suspense } from "react";
import { Task } from "../../models/task.class.js";

import styles from "./TaskList.module.css";

const TaskCard = React.lazy(() => import("../TaskCard"));

function TaskList({ tasks = [], handleTaskComplete, handleTaskDelete }) {
  const taskNumber = tasks.length;

  return (
    <div className={styles.taskList}>
      <h2>Lista de tareas</h2>

      {taskNumber === 0 && <p>No hay tareas</p>}

      {taskNumber > 0 && (
        <Suspense fallback={<p>Cargando...</p>}>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <TaskCard
                  task={task}
                  handleTaskComplete={handleTaskComplete}
                  handleTaskDelete={handleTaskDelete}
                />
              </li>
            ))}
          </ul>
        </Suspense>
      )}
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.instanceOf(Task)),
  handleTaskComplete: PropTypes.func.isRequired,
  handleTaskDelete: PropTypes.func.isRequired,
};

export default TaskList;
