import React, { useState } from 'react';

export default function TodoItem({ todo, onToggle, onDelete }) {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleMouseDown = () => {
        setIsDeleting(true);
    };

    const handleMouseUp = () => {
        setIsDeleting(false);
        onDelete(todo.id); 
    };
    
    const deleteButtonClass = `delete-btn ${isDeleting ? 'deleting' : ''}`;

    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-row">
                <input 
                    type="checkbox" 
                    checked={todo.completed} 
                    onChange={() => onToggle(todo.id)} 
                />
                <span className="todo-text">{todo.text}</span>
            </div>
            
            <button 
                className={deleteButtonClass}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={() => setIsDeleting(false)} 
            >
                Delete
            </button>
        </li>
    );
}