import PropTypes from "prop-types";
import { PRIORITY } from "../../models/priority.enum.js";

import styles from "./PriorityBadge.module.css";

const TAG = {
  HIGH: "Alta",
  NORMAL: "Normal",
  LOW: "Baja",
};

const PRIORITY_STYLES = {
  HIGH: styles.highPriority,
  NORMAL: styles.normalPriority,
  LOW: styles.lowPriority,
};

function PriorityBadge({ priority }) {
  const priorityMessage = TAG[priority] ?? TAG.NORMAL;
  const priorityStyles = PRIORITY_STYLES[priority] ?? PRIORITY_STYLES.NORMAL;

  return <span className={`${styles.priorityBadge} ${priorityStyles}`}>{priorityMessage}</span>;
}

PriorityBadge.propTypes = {
  priority: PropTypes.oneOf(Object.values(PRIORITY)),
};

export default PriorityBadge;
