import React, { useState, useEffect } from "react";
import './App.css';
function App()
{
    const [ tasks, setTasks] = useState([]);
    const [ inputText, setInputText ] = useState("");
    const [ selectedTaskText, setSelectedTaskText ] = useState("");
    const [ currentTime, setCurrentTime ] = useState(new Date().getTime());

    // setzt einen interval für die aktuelle zeit
    useEffect(() =>
    {
        setInterval(() => setCurrentTime(new Date().getTime()), 1000);
    }, []);

    useEffect(() =>
    {
        const oldTasks = JSON.parse(window.localStorage.getItem('tasks'));
        oldTasks.map(task =>
        {
            task.isEditable = false;
            return { ...task }
        });
        setTasks(oldTasks);
    }, []);

    useEffect(() =>
    {
        const existingTasks = tasks.filter(task => task.timestamp > currentTime);

        const currentTasks = JSON.stringify(existingTasks);
        window.localStorage.setItem('tasks', currentTasks);

        console.log(tasks);
    }, [tasks]);

    /**
     * @method createId();
     * @description Gibt eine zufällige ID zurück.
     * @returns { string }
     */
    const createId = () =>
    {
        return Math.random().toString(16).substr(2, 8); // 254e82e3
    }

    /**
     * @method addTask();
     * @description Fügt eine neue task ein.
     */
    const addTask = () =>
    {
        const newTask = {
            id: createId(),
            text: inputText,
            isFinished: false,
            isEditable: false,
            timestamp: new Date().getTime() + 60000,
        }
        console.log(newTask);
        setTasks([...tasks, newTask]);
        setInputText("");
    }

    /**
     * @method toggleTask();
     * @description Schaltet den zustand eines tasks um.
     * @param { object } e
     * @param { string } id
     */
    const toggleTask = (e, id) =>
    {
        const currentTask = tasks.filter(task => task.id === id)[0];
        const otherTasks = tasks.filter(task => task.id !== id);
        currentTask.isFinished = !currentTask.isFinished;
        if(currentTask.isFinished === true)
        {
            setTasks([...otherTasks, currentTask ]);
        }
        else
        {
            setTasks([currentTask, ...otherTasks ]);
        }
    }

    /**
     * @method deleteTask();
     * @description Löscht ein element aus der task array anhand der übergebenen ID
     * @param { object } e
     * @param { string } id
     */
    const deleteTask = (e, id) =>
    {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    }

    /**
     * @method handleNewTaskInput();
     * @description Behandelt die eingabe des input elements.
     * @param { object } e 
     */
    const handleNewTaskInput = (e) =>
    {
        setInputText(e.target.value);
    }

    const toggleHandleEdit = (e, id) =>
    {
        const currentTasks = tasks.map(task =>
        {
            const selectedTask = task.id === id ? task.isEditable = true : task.isEditable = false;
            return { ...task, selectedTask };
        });

        setSelectedTaskText(() => tasks.filter(task => task.id === id)[0].text);
        setTasks(() => currentTasks);
    }

    const saveTask = (e, id) =>
    {
        const currentTasks = tasks.map(task =>
            {
                if(task.id === id)
                {
                    task.text = selectedTaskText;
                    task.isEditable = false;
                }
                return { ...task };
        });
        setTasks(() => currentTasks);
    }

    return (
        <div className="App">
            <h1>Todo App</h1>
            <h3>Neue Aufgabe</h3>
            <div className="addTaskSection">
                <input onChange={ handleNewTaskInput } type="text" value={ inputText }></input>
                <button className="addButton" onClick={ addTask }>Add</button>
            </div>

            <h3>Aufgaben</h3>
            {
                tasks.length > 0 ?
                <ul>
                    {
                        tasks.map((task, i) =>
                        {
                            if(task.timestamp > currentTime)
                            {
                                return (
                                    <li key={ i } className={ task.isFinished ? 'finished' : 'active' }>
                                        {
                                            task.isEditable ? 
                                            (
                                                <div className="editTaskSection">
                                                    <input value={ selectedTaskText } onChange={ (e) => setSelectedTaskText(e.target.value) }/>
                                                    <button className="saveButton" onClick={(e) => saveTask(e, task.id)}>&#x2714;</button>
                                                    <button className="deleteButton" onClick={(e) => deleteTask(e, task.id)}>X</button>
                                                </div>
                                            )
                                            :
                                            (
                                                <div className="viewTaskSection">
                                                    <span className="taskText" onClick={ (e) => toggleTask(e, task.id) }>
                                                    { 
                                                        task.text
                                                    }
                                                    </span>
                                                    <button className="editButton" onClick={ (e) => toggleHandleEdit(e, task.id)}>&#x270E;</button>
                                                    <button className="deleteButton" onClick={(e) => deleteTask(e, task.id)}>X</button>
                                                </div>
                                            )
                                        }
                                    </li>
                                )
                            }
                        }).reverse()
                    }
                </ul>
                :
                <p className="noTasksMessage">Keine Aufgaben vorhanden</p>
            }
        </div>
    );
}
export default App;