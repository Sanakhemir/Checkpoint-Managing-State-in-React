import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask, setTaskToEdit }) => {
    return (
        <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <button onClick={() => toggleComplete(task.id)}>
                {task.completed ? 'Marquer comme non terminé' : 'Marquer comme terminé'}
            </button>
            <button onClick={() => setTaskToEdit(task)}>Modifier</button>
            <button onClick={() => deleteTask(task.id)}>Supprimer</button>
        </div>
    );
};

export default TaskItem;
