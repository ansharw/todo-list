import React from 'react'
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const TodosList = ({ todos, setTodos, setEditTodo }) => {
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        )
    };

    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id)
        setEditTodo(findTodo)
    }

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    };
    return (
        <div>
            {todos.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input
                        type="text"
                        value={todo.title}
                        className={`list ${todo.completed ? "complete" : ""}`}
                        onChange={(event) => event.preventDefault()}
                    />
                    <div>
                        {todo.completed ?
                            <button className="button-completed task-button" onClick={() => handleComplete(todo)}>
                                <CheckBoxRoundedIcon />
                            </button> :
                            <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                                <CheckBoxOutlineBlankRoundedIcon />
                            </button>}

                        <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                            <EditRoundedIcon />
                        </button>
                        <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                            <DeleteRoundedIcon />
                        </button>
                    </div>
                </li>
            ))}
        </div>
    )
}

export default TodosList
