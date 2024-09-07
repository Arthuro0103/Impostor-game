import React, { useState } from "react";

const tasks = [
  "Fix Wiring",
  "Clean Vents",
  "Align Engine Output",
  "Calibrate Distributor",
  "Clear Asteroids",
];

function Tasks({ isImpostor, onCompleteTask }) {
  const [completedTasks, setCompletedTasks] = useState(0);

  const handleCompleteTask = () => {
    if (!isImpostor) {
      setCompletedTasks((prev) => prev + 1);
      onCompleteTask();
    }
  };

  return (
    <div>
      <h3>Tasks</h3>
      {isImpostor ? (
        <p>As an impostor, your task is to sabotage and eliminate the crew!</p>
      ) : (
        <>
          <p>
            Completed Tasks: {completedTasks}/{tasks.length}
          </p>
          {tasks.map((task, index) => (
            <div key={index}>
              <span>{task}</span>
              <button onClick={handleCompleteTask}>Complete</button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Tasks;
