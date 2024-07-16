import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../app/store";
import AddTaskForm from "../../components/AddTaskForm/AddTaskForm";
import {useEffect} from "react";
import {deleteTask, editCompleteTask, fetchTasks} from "./todosSlice";
import TaskItems from "../../components/TaskItems/TaskItems";

const Todos = () => {
    const tasksData = useSelector((state: RootState) => state.todos.tasks);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const onDelete = async (id: string) => {
        await dispatch(deleteTask(id));
        await dispatch(fetchTasks());
    };

    const getCompleted = async (id: string) => {
        await dispatch(editCompleteTask(id));
        await dispatch(fetchTasks());
    };

    return (
        <div>
            <AddTaskForm />
            <TaskItems
                tasks={tasksData}
                onDelete={onDelete}
                getCompleted={getCompleted}
            />
        </div>
    );
};

export default Todos;