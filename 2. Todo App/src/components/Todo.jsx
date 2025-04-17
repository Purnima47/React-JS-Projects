import React, { useState } from 'react'
import './styleTodo.css'

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputVal, setInputVal] = useState('');
    const [deletingIds, setDeletingIds] = useState([]); // Track which todos are being deleted

    const handleSubmit = () => {
        if (inputVal.trim()) {
            setTodos((todos) =>
                todos.concat({
                    text: inputVal,
                    id: Date.now() + Math.random(), // More unique
                })
            );
            setInputVal('');
        }
    };

    const removeTodo = (id) => {
        setDeletingIds((prev) => [...prev, id]);

        // Wait for animation to finish before removing
        setTimeout(() => {
            setTodos((todos) => todos.filter((t) => t.id !== id));
            setDeletingIds((prev) => prev.filter((delId) => delId !== id));
        }, 300); // Match with CSS animation duration
    };

    return (
        <div className='container'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                    type='text'
                    placeholder='New Todo'
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                />
                <button onClick={handleSubmit}>Add Todo</button>
            </div>

            <ul className='todos-list'>
                {todos.map(({ text, id }) => (
                    <li
                        className={`todo ${deletingIds.includes(id) ? 'fade-out' : ''}`}
                        key={id}
                    >
                        <span>{text}</span>
                        <button className='close' onClick={() => removeTodo(id)}>
                            ×
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
