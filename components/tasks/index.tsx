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
        <div className="">
            {tasks.map((task, index) => (
                <TaskItem
                    value={task.value}
                    key={index}
                    description={task.description}
                    checked={task.checked}
                    onChange={() => handleCheck(index)}
                />
            ))}
        </div>
    );
};

export default TaskGroup;
