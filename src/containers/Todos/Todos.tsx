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
      <TaskItems
        tasks={tasksData}
        onDelete={onDelete}
        getCompleted={getCompleted}
      />
    </>
  );
};

export default Todos;