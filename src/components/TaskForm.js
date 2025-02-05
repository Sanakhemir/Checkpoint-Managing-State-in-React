import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, taskToEdit }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (taskToEdit) {
            setName(taskToEdit.name);
            setDescription(taskToEdit.description);
        } else {
            setName('');
            setDescription('');
        }
    }, [taskToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() && description.trim()) {
            if (taskToEdit) {
                editTask(taskToEdit.id, name, description);
            } else {
                addTask(name, description);
            }
            setName('');
            setDescription('');
        } else {
            alert("Veuillez remplir tous les champs.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Nom de la tâche" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="Description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                required 
            />
            <button type="submit">{taskToEdit ? "Modifier" : "Ajouter"}</button>
        </form>
    );
};

export default TaskForm;
