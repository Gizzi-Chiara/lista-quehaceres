import React from "react";

const List = (props) => {

    const {list, setList} = props;

    const deleteTask = (index) => {
        const newList = list.filter((_task, indexFilter) => {
            return indexFilter!== index;
        });
        setList(newList);
    }

    const taskStatus = (index) => {
        const updateList = list.map((task, mapIndex) => {
            if (index === mapIndex) {
                task.status = !task.status
            }
            return task;
        })
        setList(updateList);
    }

    return(
        <div>
            {
                list.map((task, index) => 
                    <div key={index} className="tasklist">
                        <input type="checkbox" onChange={() => taskStatus(index)} checked={task.status}/>
                        <span style={{textDecorationLine: task.status ? "line-through" : ""}} className="tasks">{task.title}</span>
                        <button className="btn btn-warning" onClick={() => deleteTask(index)}>Delete task</button>
                    </div>
                )}
        </div>
    )
}

export default List;