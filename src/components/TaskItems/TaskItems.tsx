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
        <>
            <h1>To Do list</h1>
            <div className="tasks">
            {tasks.length > 0 ? (
                tasks.map((todo) => (
                    <TaskItem
                        key={todo.id}
                        title={todo.title}
                        onRemoveTask={() => onDelete(todo.id)}
                        isDone={todo.isDone}
                        onChangeComplete={() => getCompleted(todo.id)}
                    />
                ))
            ) : (
                <h2>Empty..</h2>
            )}
        </div>
        </>
    );
};

export default TaskItems;