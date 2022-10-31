import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";

const Todos = () => {
    // retrieve todos from reducer state and assign to local todos constant
    const todos = useSelector(state => state.todos);
    const [todo, setTodo] = useState({do: ''});

    // useDispatch allows us to invoke reducer functions
    const dispatch = useDispatch();

    // LOCAL STATE HANDLER
    // function handles keystroke changes on todo input fields
    const todoChangeHandler = (event) => {
        const doValue = event.target.value;         // gets the data from the input field
        const newTodo = {
            do: doValue
        };
        setTodo(newTodo);                           // change local state to do variable
    }

    // GLOBAL STATE HANDLERS - THESE FUNCTIONS DISPATCH FROM ACTIONS TO THE STORE
    const createTodoClickHandler = () => {
        dispatch(addTodo(todo))
    }

    const deleteTodoClickHandler = (index) => {
        dispatch(deleteTodo(index))
    }

    const toggleTodoDone = (todo) => {
        dispatch(todoDoneToggle(todo));
    }

    // renders the component
    return(
        <>
            <h3>Todos</h3>
            {/*mapping as usual*/}
            <ul className="list-group">
                <li className="list-group-item">
                    <button onClick={createTodoClickHandler}
                            className="btn btn-primary w-25
                                float-end">
                        Create
                    </button>
                    <input
                        onChange={todoChangeHandler}
                        value={todo.do}                 // visually updates the field with the latest state
                        className="form-control w-75"/>
                </li>

                {
                    todos.map((todo, index) =>
                        <li key={todo._id}
                            className={"list-group-item"}>
                            <button onClick={() =>
                                deleteTodoClickHandler(index)}
                                    className="btn btn-danger float-end ms-2">
                                Delete
                            </button>
                            <input type="checkbox"
                                   checked={todo.done}
                                   onChange={() => toggleTodoDone(todo)}
                                   className="me-2"/>
                            {todo.do}
                        </li>
                    )
                }
            </ul>
        </>
    );
}
export default Todos;