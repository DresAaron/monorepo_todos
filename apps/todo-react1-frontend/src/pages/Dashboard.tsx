import React from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <TaskForm />
            <TaskList />
        </div>
    );
}

export default Dashboard;