import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../app/store";
import AddTaskForm from "../../components/AddTaskForm/AddTaskForm";
import {useEffect} from "react";
import {deleteTask, fetchTasks} from "./todosSlice";

const Todos = () => {
    const tasksData = useSelector((state: RootState) => state.todos.tasks);
    const dispatch: AppDispatch = useDispatch();

    console.log(tasksData);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const onDelete = async (id: string) => {
        await dispatch(deleteTask(id));
        await dispatch(fetchTasks());
    };

    return (
        <div>
            <AddTaskForm />
            {tasksData.map((todo) => (
                <div key={todo.id}>
                    <h3>{todo.title}</h3>
                    <button onClick={() => onDelete(todo.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Todos;