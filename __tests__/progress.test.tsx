import '@testing-library/jest-dom';
import { render, screen, waitFor } from "@testing-library/react";
import Home from "@/app/page";
import * as actions from "@/actions";

describe("Progress Bar Integration", () => {
  it("shows 0% progress when no tasks are checked", async () => {

    const mockData = [
      {
        name: "Group 1",
        tasks: [
          { description: "Task A", value: 10, checked: false, onChange: () => { } },
          { description: "Task B", value: 10, checked: false, onChange: () => { } },
        ],
      },
    ];
    jest.spyOn(actions, "fetchTasks").mockResolvedValueOnce(mockData);

    render(<Home />);

    await waitFor(() => {
      const progressbar = screen.getByRole("progressbar");

      /* sum of values = 0, completedValue = 0 => 0% */
      expect(progressbar).toHaveAttribute("aria-valuenow", "0");
    });
  });

  it("shows partial progress when some tasks are checked", async () => {
    const mockData = [
      {
        name: "Group 1",
        tasks: [
          { description: "Task A", value: 10, checked: true, onChange: () => { } },
          { description: "Task B", value: 10, checked: false, onChange: () => { } },
        ],
      },
    ];
    jest.spyOn(actions, "fetchTasks").mockResolvedValueOnce(mockData);

    render(<Home />);

    await waitFor(() => {
      const progressbar = screen.getByRole("progressbar");
      /* sum of values = 20, completedValue = 10 => 50% */
      expect(progressbar).toHaveAttribute("aria-valuenow", "50");
    });
  });

  it("shows 100% when all tasks are checked", async () => {
    const mockData = [
      {
        name: "Group 1",
        tasks: [
          { description: "Task A", value: 10, checked: true, onChange: () => { } },
          { description: "Task B", value: 10, checked: true, onChange: () => { } },
        ],
      },
    ];
    jest.spyOn(actions, "fetchTasks").mockResolvedValueOnce(mockData);

    render(<Home />);

    await waitFor(() => {
      const progressbar = screen.getByRole("progressbar");
      /* sum of values = 20, completedValue = 20 => 100% */
      expect(progressbar).toHaveAttribute("aria-valuenow", "100");
    });
  });
});
