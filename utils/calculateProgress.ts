import { Group } from "@/types";

export function calculateProgress(groups: Group[]): number {
  const totalValue = groups.reduce((acc, group) => {
    return acc + group.tasks.reduce((taskSum, task) => taskSum + task.value, 0);
  }, 0);

  const completedValue = groups.reduce((acc, group) => {
    return (
      acc +
      group.tasks.reduce(
        (taskSum, task) => (task.checked ? taskSum + task.value : taskSum),
        0
      )
    );
  }, 0);

  if (totalValue === 0) return 0;
  return (completedValue / totalValue) * 100;
}
