"use client"
import React, { useState } from 'react';
import Arrow from './icons/arrow';
import GroupIcon from './icons/group';

type AccordionProps = {
    title: string;
    children: React.ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full border rounded-lg mb-4 bg-white shadow">
            <div
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-primary/10"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-2">
                    <GroupIcon />
                    <h3 className={`text-sm font-semiboldtext-gray-700`}>
                        {title}
                    </h3>
                </div>
                <button className="flex items-center gap-4 text-center text-primary hover:text-primary/90">
                    Show
                    <Arrow open={isOpen} />
                </button>

            </div>
            {isOpen && <div className="p-4 border-t bg-gray-50">{children}</div>}
        </div>

    );
};

export default Accordion;
