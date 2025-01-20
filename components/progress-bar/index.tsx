import React from 'react';

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
    <div className="w-full bg-gray-200 h-4 rounded-lg overflow-hidden shadow-sm">
        <div
            className="bg-primary h-full rounded-lg transition-all duration-300"
            style={{ width: `${progress}%` }}
        />
    </div>
);

export default ProgressBar;
