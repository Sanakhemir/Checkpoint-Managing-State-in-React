import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleComplete, deleteTask, setTaskToEdit }) => {
    return (
        <div>
            {tasks.length === 0 ? <p>Aucune tâche disponible.</p> : 
                tasks.map(task => (
                    <TaskItem 
                        key={task.id} 
                        task={task} 
                        toggleComplete={toggleComplete} 
                        deleteTask={deleteTask} 
                        setTaskToEdit={setTaskToEdit} 
                    />
                ))
            }
        </div>
    );
};

export default TaskList;
