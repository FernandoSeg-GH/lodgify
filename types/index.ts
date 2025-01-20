export type Task = {
  description: string;
  value: number;
  checked: boolean;
  onChange: () => void;
};

export type Group = {
  name: string;
  tasks: Task[];
};
