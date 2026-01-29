import { useState } from 'react'

let TodoList = () => {
    const [todos, setTodos] = useState([
        "Go to GYM", 
        "Eat healthy food", 
        "Code for backend", 
        "Sleep 7 hours", 
        "Do the Assignment"
    ])

    const [newTask, setNewTask] = useState("")

    // Function to delete a task
    const deleteTask = (indexToDelete) => {
        const updatedTodos = todos.filter((_, index) => index !== indexToDelete)
        setTodos(updatedTodos)
    }

    // Function to add a new task
    const addTask = () => {
        if (newTask.trim() !== "") {
            setTodos([...todos, newTask])
            setNewTask("")
        }
    }

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h3>My Todo List</h3>
            
            {/* Add Task Section */}
            <div style={{ marginBottom: '20px' }}>
                <input 
                    type="text" 
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter a new task"
                    style={{ padding: '8px', marginRight: '10px', width: '300px' }}
                    onKeyPress={(e) => e.key === 'Enter' && addTask()}
                />
                <button 
                    onClick={addTask}
                    style={{ padding: '8px 16px', cursor: 'pointer' }}
                >
                    Add Task
                </button>
            </div>

            {/* Task List */}
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {
                    todos.map((el, index) => {
                        return (
                            <li 
                                key={index} 
                                style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between', 
                                    alignItems: 'center',
                                    padding: '10px',
                                    marginBottom: '8px',
                                    backgroundColor: '#f0f0f0',
                                    borderRadius: '5px'
                                }}
                            >
                                <span>{el}</span>
                                <button 
                                    onClick={() => deleteTask(index)}
                                    style={{ 
                                        padding: '5px 12px', 
                                        backgroundColor: '#ff4444', 
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '3px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Delete
                                </button>
                            </li>
                        )
                    })
                }
            </ul>

            {todos.length === 0 && (
                <p style={{ textAlign: 'center', color: '#888' }}>
                    No tasks yet. Add one above!
                </p>
            )}
        </div>
    )
}

export default TodoList