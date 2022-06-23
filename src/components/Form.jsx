import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RestoreRoundedIcon from '@mui/icons-material/RestoreRounded';

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? { title, id, completed } : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    };
    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        } else {
            setInput("");
        }
    }, [setInput, editTodo])

    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!editTodo) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
            setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    };
    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="Please enter your todo..."
                className="task-input"
                value={input}
                required
                onChange={onInputChange}
            />
            {editTodo ?
                <Button variant="contained" className="button-add-update" type="submit" endIcon={<RestoreRoundedIcon />}>
                    OK
                </Button>
                :
                <Button variant="contained" className="button-add-update" type="submit" endIcon={<AddCircleRoundedIcon />}>
                    ADD
                </Button>}
        </form>
    )
}

export default Form
