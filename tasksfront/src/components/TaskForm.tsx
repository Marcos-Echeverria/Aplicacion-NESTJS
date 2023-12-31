import {useState, ChangeEvent, FormEvent} from 'react'
import { useTasks } from '../context/useTasks';

const TaskForm = () => {

    const [task, setTask] = useState({
        title: "",
        description:"",
        done: false,
    });

    const {createTask} = useTasks();

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setTask({...task, [e.target.name]: e.target.value});
    
    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createTask(task);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" className="border-2 border-gray-700 p-2 bg-zinc-800 block w-full my-2" onChange={handleChange} />
                <textarea name="description" rows={3} className="border-2 border-gray-700 p-2 bg-zinc-800 block w-full my-2" onChange={handleChange} ></textarea>
                <label htmlFor="" className="flex justify-end gap-x-2">
                    <input onChange={() => setTask({...task, done: !task.done})} type="checkbox" className="h-5 w-5 text-indigo-600 "/>
                    <span>Done</span>
                </label>
                <button className="bg-indigo-500 px-3 block py-2 w-full">Save</button>
            </form>
        </div>
    )
}

export default TaskForm