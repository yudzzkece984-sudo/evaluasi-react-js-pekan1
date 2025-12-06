import React, { useState } from 'react'


export default function TodoForm({ onAdd }) {
const [text, setText] = useState('')


function handleSubmit(e) {
e.preventDefault()
if (!text.trim()) return
onAdd(text)
setText('')
}


return (
<form className="todo-form" onSubmit={handleSubmit}>
<input
className="todo-input"
placeholder="Enter Any Name"
value={text}
onChange={e => setText(e.target.value)}
aria-label="New todo"
/>
<button type="submit" className="add-btn">Add</button>
</form>
)
}