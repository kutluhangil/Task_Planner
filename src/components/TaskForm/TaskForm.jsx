import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasks/operations";
import { toast } from "react-hot-toast";

export const TaskForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const text = form.elements.text.value;

        if (text.trim() === "") {
            toast.error("Task description cannot be empty!");
            return;
        }

        dispatch(addTask(text))
            .unwrap()
            .then(() => {
                toast.success("Task added successfully!");
                // TODO: Add confetti or something fun here later!
            })
            .catch((e) => toast.error("Failed to add task: " + e));

        form.reset();
    };

    return (
        <form className="flex gap-4 mb-8" onSubmit={handleSubmit}>
            <input
                type="text"
                name="text"
                className="flex-grow input-field"
                placeholder="Enter task text..."
                autoComplete="off"
            />
            <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-lg shadow-blue-500/30"
            >
                Add Task
            </button>
        </form>
    );
};
