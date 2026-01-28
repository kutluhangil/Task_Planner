import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/tasks/operations";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

export const Task = ({ id, text, completed }) => {
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteTask(id))
        .unwrap()
        .catch(e => toast.error("Failed to delete task"));

    const handleToggle = () => dispatch(toggleCompleted({ id, completed, text }))
        .unwrap()
        .catch(e => toast.error("Failed to update task"));

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="glass p-4 rounded-xl flex items-center justify-between gap-4 group hover:border-blue-500/50 transition-colors"
        >
            <div className="flex items-center gap-4 flex-grow">
                <label className="relative flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={completed}
                        onChange={handleToggle}
                    />
                    <div className={`w-6 h-6 border-2 rounded-md flex items-center justify-center transition-all duration-300 ${completed ? 'bg-blue-500 border-blue-500' : 'border-gray-500 hover:border-blue-400'
                        }`}>
                        {completed && (
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                        )}
                    </div>
                </label>
                <p className={`text-lg transition-all duration-300 ${completed ? 'line-through text-gray-500' : 'text-gray-100'}`}>
                    {text}
                </p>
            </div>
            <button
                type="button"
                onClick={handleDelete}
                className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
            </button>
        </motion.div>
    );
};
