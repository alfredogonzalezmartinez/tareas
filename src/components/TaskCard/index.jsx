import PropTypes from "prop-types";
import { Task } from "../../models/task.class.js";
import TrashIcon from "../Icons/TrashIcon";
import PriorityBadge from "../PriorityBadge/index.jsx";

import styles from "./TaskCard.module.css";

function TaskCard({ task, handleTaskComplete, handleTaskDelete }) {
  if (!task) return null;

  const handleCompleteCheckboxChange = () => handleTaskComplete(id);
  const handleDeleteButtonClick = () => handleTaskDelete(id);

  const { id, description, priority, isCompleted } = task;

  const taskCardStiles = `${styles.taskCard} ${isCompleted && styles.taskCompleted}`;

  return (
    <article id={id} className={taskCardStiles}>
      <header>
        <input
          checked={isCompleted}
          name="Completada"
          onChange={handleCompleteCheckboxChange}
          type="checkbox"
          value="Completada"
        />
        <p>{isCompleted ? "Completada" : "Pendiente"}</p>
        <button
          className={styles.deleteButton}
          name="Eliminar"
          onClick={handleDeleteButtonClick}
          title="Eliminar"
        >
          <TrashIcon />
        </button>
      </header>
      <section>
        <h3>{description}</h3>
      </section>
      <footer>
        <p>
          Prioridad: <PriorityBadge priority={priority} />
        </p>
      </footer>
    </article>
  );
}

TaskCard.propTypes = {
  task: PropTypes.instanceOf(Task),
  handleTaskComplete: PropTypes.func.isRequired,
  handleTaskDelete: PropTypes.func.isRequired,
};

export default TaskCard;
