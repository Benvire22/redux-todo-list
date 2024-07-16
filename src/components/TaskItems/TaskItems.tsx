import React from 'react';
import TaskItem from "./TaskItem/TaskItem";
import {Task} from "../../types";

interface Props {
    tasks: Task[];
    onDelete: (id: string) => void;
    getCompleted: (id: string) => void;
}

const TaskItems: React.FC<Props> = ({tasks, onDelete, getCompleted}) => {
    return (
        <div className="tasks">
            {tasks.map((todo) => (
                <TaskItem
                    key={todo.id}
                    title={todo.title}
                    onRemoveTask={() => onDelete(todo.id)}
                    isDone={todo.isDone}
                    onChangeComplete={() => getCompleted(todo.id)}
                />
            ))}
        </div>
    );
};

export default TaskItems;