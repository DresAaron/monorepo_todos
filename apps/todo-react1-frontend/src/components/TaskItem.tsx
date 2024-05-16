import React from 'react';

interface TaskItemProps {
    task: {
        id: number;
        title: string;
        description: string;
    };
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
    return (
        <div className="task-item">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
        </div>
    );
}

export default TaskItem;