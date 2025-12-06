import React, { useState, useMemo, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'

const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2,8)


export default function App() {
const [isDarkMode, setIsDarkMode] = useState(false)
    
const [todos, setTodos] = useState([
{ id: uid(), text: 'Learn React basics', completed: false },
{ id: uid(), text: 'Build a Todo app', completed: true }
])
const [filter, setFilter] = useState('all')

useEffect(() => {
    if (isDarkMode) {
        document.body.classList.add('dark-mode')
    } else {
        document.body.classList.remove('dark-mode')
    }
    localStorage.setItem('darkMode', isDarkMode) 
}, [isDarkMode])


const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode)
}


function addTodo(text) {
if (!text.trim()) return
const newTodo = { id: uid(), text: text.trim(), completed: false }
setTodos(prev => [newTodo, ...prev])
}


function toggleTodo(id) {
setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
}


function deleteTodo(id) {
setTodos(prev => prev.filter(t => t.id !== id))
}


const filteredTodos = useMemo(() => {
if (filter === 'active') return todos.filter(t => !t.completed)
if (filter === 'completed') return todos.filter(t => t.completed)
return todos
}, [todos, filter])


return (
<div className="app-container">
    
    <button 
        className="dark-mode-toggle" 
        onClick={toggleDarkMode}
        aria-label={isDarkMode ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
    >
        {isDarkMode ? '🌞' : '🌙'} {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
    
    <header className="app-header">
        <h1>Todo App</h1>
        <p className="subtitle">Simple, responsive, and built with React hooks</p>
    </header>


    <main className="app-main">
        <section className="card">
            <TodoForm onAdd={addTodo} />


            <div className="controls">
                <TodoFilter current={filter} onChange={setFilter} />
                <div className="stats">
                    <span>{todos.filter(t => !t.completed).length} active</span>
                    <button
                        className="clear-btn"
                        onClick={() => setTodos(prev => prev.filter(t => !t.completed))}
                        aria-label="Clear completed todos"
                    >
                        Clear completed
                    </button>
                </div>
            </div>

            <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </section>
    </main>


    <footer className="app-footer">
        <small>Made By SiDxBeelz</small>
    </footer>
</div>
)
}