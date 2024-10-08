
import { observer } from "mobx-react-lite";
import todoStore from "../../../stores/toDoStore";
import TaskItem from "../../task_item/task_item";


 function TaskList() {
    const {todos} = todoStore

    return(
        <>
        <section className="min-w-[40%] max-w-[45%] m-0 min-h-[478px] px-4 py-4  shadow-md bg-[rgba(15,33,63,0.8)] rounded-l-lg ">
            <h3 className="text-2xl text-white font-medium mb-4 text-left">Задачи</h3>
            <ul >
                {todos.map( (el, i) =>
                    <TaskItem key={i} title={el.text} checked={el.checked} index={i} id={String(el.id)} />
                )}
                
            </ul>
        </section>
        </>
    )
}

export default observer( TaskList);