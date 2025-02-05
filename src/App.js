// import React, { useState, useEffect } from 'react';
// import TaskForm from './components/TaskForm';
// import TaskList from './components/TaskList';

// const App = () => {
//     const [tasks, setTasks] = useState([]);
//     const [taskToEdit, setTaskToEdit] = useState(null);

//     // Charger les tâches depuis localStorage au démarrage
//     useEffect(() => {
//         const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//         setTasks(savedTasks);
//     }, []);

//     // Sauvegarder les tâches à chaque mise à jour
//     useEffect(() => {
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//     }, [tasks]);

//     const addTask = (name, description) => {
//         const newTask = { id: Date.now(), name, description, completed: false };
//         setTasks([...tasks, newTask]);
//     };

//     const editTask = (id, newName, newDescription) => {
//         setTasks(tasks.map(task => 
//             task.id === id ? { ...task, name: newName, description: newDescription } : task
//         ));
//         setTaskToEdit(null);
//     };

//     const toggleComplete = (id) => {
//         setTasks(tasks.map(task => 
//             task.id === id ? { ...task, completed: !task.completed } : task
//         ));
//     };

//     const deleteTask = (id) => {
//         if (window.confirm("Voulez-vous vraiment supprimer cette tâche ?")) {
//             setTasks(tasks.filter(task => task.id !== id));
//         }
//     };

//     return (
//         <div>
//             <h1>To-Do List</h1>
//             <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} />
//             <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} setTaskToEdit={setTaskToEdit} />
//         </div>
//     );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './styles.css'; // Import du CSS

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [taskToEdit, setTaskToEdit] = useState(null);

    // Charger les tâches depuis localStorage
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(savedTasks);
    }, []);

    // Sauvegarder les tâches à chaque mise à jour
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (name, description) => {
        const newTask = { id: Date.now(), name, description, completed: false };
        setTasks([...tasks, newTask]);
    };

    const editTask = (id, newName, newDescription) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, name: newName, description: newDescription } : task
        ));
        setTaskToEdit(null);
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        if (window.confirm("Voulez-vous vraiment supprimer cette tâche ?")) {
            setTasks(tasks.filter(task => task.id !== id));
        }
    };

    return (
        <div className="container">
            {/* Section de gauche : Tâches */}
            <div className="tasks-section">
                <h1>To-Do List</h1>
                <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} />
                <TaskList 
                    tasks={tasks} 
                    toggleComplete={toggleComplete} 
                    deleteTask={deleteTask} 
                    setTaskToEdit={setTaskToEdit} 
                />
            </div>

            {/* Section de droite : Image */}
            <div className="image-section">
                <img src="todolist.png" alt="To-Do Illustration" />
            </div>
        </div>
    );
};

export default App;
