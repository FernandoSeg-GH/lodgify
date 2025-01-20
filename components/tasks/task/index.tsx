import CheckIcon from '@/components/accordion/icons/check';
import { Task } from '@/types';
import React from 'react';

const TaskItem: React.FC<Task> = ({ description, checked, onChange }) => (
    <div className="flex items-center gap-2 p-2">
        <div
            className={`w-6 h-6 border-2 rounded flex items-center justify-center cursor-pointer ${checked ? 'bg-[#02BC9C] border-[#02BC9C]' : 'border-gray-300'
                }`}
            onClick={onChange}
        >
            <CheckIcon checked={checked} />
        </div>


        <span className={`text-sm ${checked ? "line-through text-gray-400" : "text-gray-700"}`}>
            {description}
        </span>
    </div>
);


export default TaskItem;
