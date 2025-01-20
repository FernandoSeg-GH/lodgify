import React from 'react';

const ProgressBar: React.FC<{ progress: number; 'aria-label'?: string }> = ({ progress, ...props }) => (
    <div
        className="w-full bg-gray-200 h-4 rounded-lg overflow-hidden shadow-sm"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
        {...props}
    >
        <div
            className="bg-primary h-full rounded-lg transition-all duration-300"
            style={{ width: `${progress}%` }}
        />
    </div>
);

export default ProgressBar;
