import React, {useState} from 'react';
import './AddTaskForm.css';
import {addTask, fetchTasks} from "../../containers/Todos/todosSlice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../app/store";


const AddTaskForm = () => {
  const [formData, setFormData] = useState<string>('');
  const dispatch: AppDispatch = useDispatch();

  const changeFormData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(event.target.value);
  };

  const sendTask = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await dispatch(addTask(formData));
    await dispatch(fetchTasks());

    setFormData('');
  };

  return (
    <form onSubmit={sendTask}>
      <div className="form-row">
        <input
            className="field"
            type="text"
            placeholder="Add new Task"
            value={formData}
            onChange={changeFormData}
            required
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default AddTaskForm;