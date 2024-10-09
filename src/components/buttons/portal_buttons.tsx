import { observer } from "mobx-react-lite";
import todoStore from "../../stores/toDoStore";
import { useState } from "react";



function PortalButtons() {
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
      <div className="flex flex-col items-center h-[75%]"> {/* Убедитесь, что родитель имеет фиксированную высоту */}
        <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleKeyDown}
            className="border border-gray-300 rounded py-1 px-2 m-1 w-full max-w-[95%]"
        />
        <textarea
            onChange={(e) => {
                todoStore.updateSelectedTodoDescription(e.target.value);
            }}
            placeholder="Описание задачи"
            className="w-full flex-1 border border-gray-300 rounded pl-1.5 pt-3 max-w-[95%] resize-none m-1"
        />
        <button
            onClick={handleAdd}
            type="button"
            className="w-full max-w-[25%] font-light bg-black bg-opacity-85 py-2 text-xs text-white m-1 rounded hover:bg-black hover:bg-opacity-55"
        >
            Добавить
        </button>
    </div>
        </>
    );
}

export default observer(PortalButtons);