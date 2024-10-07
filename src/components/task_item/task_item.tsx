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
    
    return(
        <>
        
        <li className="text-white text-sm font-extralight text-opacity-90 mt-2 leading-none flex items-center">
            <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleCheckboxChange} // Обработчик изменения состояния чекбокса
                    className="mr-2"
                />
            {title}
        </li>
        </>
    )
}