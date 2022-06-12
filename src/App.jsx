import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import { Task } from "./models/task.class";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleTaskAdd = ({ description, priority }) => {
    const newTask = new Task({ description, priority });
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleTaskComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          const { description, priority, isCompleted } = task;
          return new Task({
            id,
            description,
            priority,
            isCompleted: !isCompleted,
          });
        }
        return task;
      })
    );
  };

  const handleTaskDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <header>
        <h1>Tareas</h1>
      </header>
      <AddTaskForm handleTaskAdd={handleTaskAdd} />
      <TaskList
        tasks={tasks}
        handleTaskComplete={handleTaskComplete}
        handleTaskDelete={handleTaskDelete}
      />
    </>
  );
}

export default App;
