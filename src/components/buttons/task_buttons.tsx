import { observer } from "mobx-react-lite";
import todoStore from "../../stores/toDoStore";
import { useState } from "react";



function TaskButtons() {
    const { addTodo, selectAll, deselectAll, removeCheckedTodos } = todoStore;
    const [newTask, setNewTask] = useState('');

    const handleAdd = () => {
        if (newTask.trim()) {
            addTodo(newTask);
            setNewTask(''); 
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleAdd(); 
        }
    };


    return (
        <>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyDown={handleKeyDown}
                className="border border-gray-300 rounded py-1 px-2 m-1"
            />
            <button onClick={handleAdd} type="button" className="font-light bg-black bg-opacity-85 py-2 px-2 text-xs text-white m-1 rounded hover:bg-black hover:bg-opacity-55">
                Добавить
            </button>
            <button onClick={selectAll} className="font-light bg-black bg-opacity-85 py-2 px-2 text-xs text-white m-1 rounded hover:bg-black hover:bg-opacity-55">
                &#128505; все
            </button>
            <button onClick={deselectAll} className="font-light bg-black bg-opacity-85 py-2 px-2 text-xs text-white m-1 rounded hover:bg-black hover:bg-opacity-55">
                &#128503; все
            </button>
            <button onClick={removeCheckedTodos} className="font-light bg-black bg-opacity-85 py-2 px-2 text-xs text-white m-1 rounded hover:bg-black hover:bg-opacity-55">
                 &#128465; все
            </button>
            
        </>
    );
}

export default observer(TaskButtons);