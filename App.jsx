import { useState } from "react";

function TaskItem({ task, onComplete, onDelete }) {
  return (
    <div className="border rounded-lg p-4 mb-3 flex items-center justify-between">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onComplete(task.id)}
        />

        <span
          className={`ml-3 ${
            task.completed ? "line-through" : ""
          }`}
        >
          {task.text}
        </span>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="border rounded px-3 py-1"
      >
        Delete
      </button>
    </div>
  );
}

function TaskList({ tasks, onComplete, onDelete }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

function App() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (taskText.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskText("");
  }

  function completeTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">
        Task Tracker
      </h1>

      <div className="mb-6">
        <input
          type="text"
          value={taskText}
          onChange={(event) => setTaskText(event.target.value)}
          placeholder="Enter a task"
          className="border rounded px-4 py-2 mr-2"
        />

        <button
          onClick={addTask}
          className="border rounded px-4 py-2"
        >
          Add Task
        </button>
      </div>

      <TaskList
        tasks={tasks}
        onComplete={completeTask}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;