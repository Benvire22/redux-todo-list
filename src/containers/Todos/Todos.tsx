import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../app/store';
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm';
import {deleteTask, editCompleteTask, fetchTasks} from './todosSlice';
import TaskItems from '../../components/TaskItems/TaskItems';
import Spinner from '../../components/Spinner/Spinner';

const Todos = () => {
  const tasksData = useSelector((state: RootState) => state.todos.tasks);
  const isLoading = useSelector((state: RootState) => state.todos.isLoading);
  const isError = useSelector((state: RootState) => state.todos.isError);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    void dispatch(fetchTasks());
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
    <>
      {isLoading && <Spinner/>}
      <AddTaskForm/>
      {isError ? (
        <h2 className="text-danger fs-1 my-5">Sorry, unexpected error was occurred!</h2>
      ) : (
        <TaskItems
          tasks={tasksData}
          onDelete={onDelete}
          getCompleted={getCompleted}
        />
      )}
    </>
  );

};

export default Todos;