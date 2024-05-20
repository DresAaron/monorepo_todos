import React, { useEffect, useState } from 'react';
import APIClient from '../services/APIClient.ts';
import TaskItem from './TaskItem';

interface Task {
    id: number;
    title: string;
    description: string;
}

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await APIClient.get<Task[]>('/tasks');
            setTasks(response.data);
        }
        fetchTasks();
    }, []);

    return (
        <div className="task-list">
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
}

export default TaskList;