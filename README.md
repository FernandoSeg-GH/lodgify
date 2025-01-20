# Lodgify - Frontend Assessment Requirements:

## Overview:

The widget is composed of:

- A **Progress Bar** indicating the overall completion percentage.
- An **Accordion** for each **group** of tasks.
- A list of **Checkboxes (tasks)** inside each accordion group.

The completion progress is **normalized** according to the sum of all task values. We'll use recude() function to work around the values.

---

## Getting Started

Live URL: [https://lodgify-pied.vercel.app/](https://lodgify-pied.vercel.app/)

### Prerequisites

- **Node.js** (version 20+ recommended)
- **npm** or **yarn**

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/FernandoSeg-GH/lodgify.git
   cd lodgify
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open the application**:
   - Navigate to `http://localhost:3000` in your browser to see the app running.

---

**Key components**:

1. **`page.tsx` (Home page)**

   - Fetches task groups via `fetchTasks()` (**server action**).
   - Renders the `ProgressBar` and a list of `Accordion` components, each containing a `TaskGroup`.

2. **`progress-bar.tsx`**

   - Displays a progress bar based on the `progress` prop (0–100).

3. **`accordion/index.tsx`**

   - A reusable accordion component that expands/collapses its children.

4. **`tasks/index.tsx` (TaskGroup)**

   - Displays a list of tasks inside a group.

5. **`tasks/task.tsx` (TaskItem)**

   - A single checkbox-like item for marking tasks as checked or unchecked.

6. **`actions.ts`**
   - Exports the `fetchTasks()` function that retrieves task data from the provided URL.

---

## Challenge:

<aside>
💡 For **Normalised** in this case we mean to reduce a number to its percentage equivalent of the sum of all the values. In Math:

$Nt = Vt * 100 / ∑(Vt)$

where:
$Nt$ is the normalised value of a task
$Vt$ is the scalar value of the task
$∑(Vt)$ is the sum of all the tasks values.

for example if the sum of the tasks is 423 and a task has a value of 36 the normalised value will be 8.51

</aside>

## Solution:

Instead of displaying the progress by **adding the amount of checked items**, we will use `reduce()`, with this function we can transform the data to 'normalize' the value.

## Testing

In the **tests** folder, you can find an integration test written using Jest and React Testing Library. To strat the test simply run `npm test` and 3 expected scenarios will be validated.

- The test focuses on verifying the integration between the `fetchTasks()` function, `Home` component, and the `ProgressBar` component.
- The main goal is to ensure that the progress bar correctly updates and displays changes in the progress value based on the mocked data.
- For the scope of this assessment, I'll mock data instead of setting up the server to ensure the tests remain focused on verifying the component behavior and integration, without relying on an actual backend or network calls
