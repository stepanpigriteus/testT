import todoStore from "../../stores/toDoStore";

interface TaskItemProps {
    title: string; // Заголовок задачи
    checked: boolean; // Статус завершения задачи
    index: number;
}

export default function TaskItem({ title, checked, index }:TaskItemProps) {
    const handleCheckboxChange = () => {
        todoStore.toggleTodo(index); // Переключение состояния задачи
    };

    const handleSel = () => {
        todoStore.selectTodo(index );
    }

    return(
        <>
        
        <li 
            className="text-white text-sm font-extralight text-opacity-90 mt-2 leading-none flex justify-between items-center"
            onClick={handleSel}
        >
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                    onClick={() => todoStore.handleClick(index)}
                />
                {title}
            </div>
            <button 
                type="button"
                className="ml-4 bg-transparent p-1 text-white-500 text-[0.7rem] min-h-1 min-w-1 border-0  focus:outline-none"
                onClick={() => todoStore.removeTodo(index)}    
            >
                X
            </button>
        </li>
        </>
    )
}