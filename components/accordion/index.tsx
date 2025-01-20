"use client"
import React, { useState } from 'react';
import Arrow from './icons/arrow';
import GroupIcon from './icons/group';

type AccordionProps = {
    title: string;
    children: React.ReactNode;
    "aria-label"?: string;
};

const Accordion: React.FC<AccordionProps> = ({ title, children, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full border rounded-lg mb-4 bg-white shadow" {...props}>
            <div
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-primary/10"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls={`${title}-content`}
            >
                <div className="flex items-center gap-2">
                    <GroupIcon />
                    <h3 id={`${title}-heading`} className="text-sm font-semibold text-gray-700">
                        {title}
                    </h3>
                </div>
                <button
                    aria-label={`Toggle ${title}`}
                    aria-labelledby={`${title}-heading`}
                    className="flex items-center gap-4 text-center text-primary hover:text-primary/90"
                >
                    Show
                    <Arrow open={isOpen} />
                </button>
            </div>
            {isOpen && (
                <div id={`${title}-content`} className="p-4 border-t bg-gray-50">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Accordion;
