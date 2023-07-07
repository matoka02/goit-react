import React from "react";

const ToDo = ({todo}) => {
    return (
        <li className="list-group-item">
            <div className="row justify-content-between">
                <div className="col-10">
                    <input 
                    className="form-check-input me-2" 
                    type="checkbox" />
                    {todo.title}
                </div>
                <div className="col">
                    <button 
                    className="btn-close"
                    type="button"
                    aria-label="Close"></button>
                </div>
            </div>
        </li>
    )
}

export default ToDo;