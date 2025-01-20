"use client"
import React, { useState, useEffect } from 'react';
import ProgressBar from '@/components/progress-bar';
import Accordion from '@/components/accordion';
import TaskGroup from '@/components/tasks';
import { Group } from '@/types';
import { fetchTasks } from '@/actions';
import { calculateProgress } from '@/utils/calculateProgress';

const Home: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchTasks();
        setGroups(data);
        setProgress(calculateProgress(data));
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    getData();
  }, []);

  const handleTaskUpdate = (updatedGroups: Group[]) => {
    setGroups(updatedGroups);
    setProgress(calculateProgress(updatedGroups));
  };

  return (
    <div className="p-8 w-screen flex flex-col items-center justify-start">
      <div className="w-[90%] max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Profile Completion</h1>
        <ProgressBar progress={progress} aria-label="Progress bar showing profile completion percentage" />
        <div className="mt-10">
          {groups.map((group, index) => (
            <Accordion key={index} title={group.name} aria-label={`Accordion for ${group.name}`}>
              <TaskGroup
                group={group}
                onUpdate={(updatedGroup) => {
                  const updatedGroups = [...groups];
                  updatedGroups[index] = updatedGroup;
                  handleTaskUpdate(updatedGroups);
                }}
              />
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
