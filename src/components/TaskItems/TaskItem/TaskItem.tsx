import React from 'react';
import './TaskItem.css';

interface Props {
  title: string;
  onRemoveTask: React.MouseEventHandler;
  isDone: boolean;
  onChangeComplete: React.ChangeEventHandler<HTMLInputElement>;
}

const TaskItem: React.FC<Props> = ({
     title,
     onRemoveTask,
     isDone,
     onChangeComplete
   }) => {

  return (
    <div className={`task ${isDone ? 'completed' : ''}`}>
      <p className="task-descr">{title}</p>
      <div className="task-ui">
        <label className="checkbox-label">
          <input className="task-checkbox" type="checkbox" checked={isDone} onChange={onChangeComplete}/>
          <span></span>
        </label>
        <button onClick={onRemoveTask}>Delete task</button>
      </div>
    </div>
  );
};

export default TaskItem;