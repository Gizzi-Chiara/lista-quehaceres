import React, { useState, useTransition } from "react";

const Form = (props) => {
    //Desestructura props
    const {list, setList} = props;

    //Propiedades de la tarea
    const [title, setTitle] = useState([""]);
    const [status, setStatus] = useState(false);
    
    //Metodo para añadir tareas
    const addTask = (e) => {
        e.preventDefault();
        //Si la tarea viene vaci
        if (title.length === 0) {
            return;
        } 
        const newTask = {
            title, status
        }
        setList([...list, newTask]);
        console.log(list);
    }

    return(
        <div>
            <form onSubmit={addTask} className="form">
                <label className="newtask">New Task: </label>
                <input type="test" onChange={(e) => setTitle(e.target.value)} placeholder="Add new task"/>
                <input type="submit" value={"Add task"} className="btn btn-primary"/>
            </form>
        </div>
    )
}

export default Form;