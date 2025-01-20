"use client";
import React, { useState } from 'react';
import TaskItem from './task';
import { Group } from '@/types';

interface TaskGroupProps {
    group: Group;
    onUpdate: (updatedGroup: Group) => void;
}

const TaskGroup: React.FC<TaskGroupProps> = ({ group, onUpdate }) => {
    const [tasks, setTasks] = useState(group.tasks);

    const handleCheck = (index: number) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].checked = !updatedTasks[index].checked;
        setTasks(updatedTasks);
        onUpdate({ ...group, tasks: updatedTasks });
    };

    return (
        <div>
            {tasks.map((task, index) => (
                <TaskItem
                    key={index}
                    value={task.value}
                    description={task.description}
                    checked={task.checked}
                    onChange={() => handleCheck(index)}
                    aria-label={`Task ${task.description}, ${task.checked ? 'completed' : 'not completed'}`}
                />
            ))}
        </div>
    );
};

export default TaskGroup;
