import React, {useState} from 'react';
import './AddTaskForm.css';
import {TaskApi} from "../../types";

interface Props {
  addNewTask: (event: React.FormEvent<HTMLFormElement>, newPost: string) => void;
}

const AddTaskForm: React.FC<Props> = ({addNewTask}) => {
  const [formData, setFormData] = useState<string>('');

  const changeFormData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(event.target.value);
  };

  const sendTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTask: TaskApi = {
      title: formData,
      isDone: false,
    };

    addNewTask(event, formData);
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