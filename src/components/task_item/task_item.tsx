import todoStore from "../../stores/toDoStore";

interface TaskItemProps {
    title: string; 
    checked: boolean; 
    index: number;
}

export default function TaskItem({ title, checked, index }:TaskItemProps) {
    const handleCheckboxChange = () => {
        todoStore.toggleTodo(index); 
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
                    className="mr-2 "
                    onBlur={(e) => todoStore.updateDescription(e.target.value)} 
                    onClick={() => todoStore.handleClick(index)}
                />
                {title}
            </div>
            <div> 
            <button 
                type="button"
                className="ml-4 bg-transparent p-1 text-white-500 text-[0.7rem] min-h-1 min-w-1 border-0  focus:outline-none"
                onClick={() => todoStore.removeTodo(index)}    
            >
                +
            </button>
            <button 
                type="button"
                className="ml-2 bg-transparent p-1 text-white-500 text-[0.7rem] min-h-1 min-w-1 border-0  focus:outline-none"
                onClick={() => todoStore.removeTodo(index)}    
            >
                X
            </button>
            </div>
            
        </li>
        </>
    )
}