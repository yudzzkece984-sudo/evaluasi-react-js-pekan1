import React from 'react'


export default function TodoFilter({ current, onChange }) {
const opts = [
{ id: 'all', label: 'All' },
{ id: 'active', label: 'Active' },
{ id: 'completed', label: 'Completed' }
]


return (
<div className="filter-group" role="tablist" aria-label="Filter todos">
{opts.map(o => (
<button
key={o.id}
className={`filter-btn ${current === o.id ? 'active' : ''}`}
onClick={() => onChange(o.id)}
aria-pressed={current === o.id}
>
{o.label}
</button>
))}
</div>
)
}