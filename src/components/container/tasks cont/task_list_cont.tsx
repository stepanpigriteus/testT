import TaskItem from "../../task_item/task_item";


export default function TaskList() {
    return(
        <>
        <section className="min-w-[30%] max-w-[45%] m-0 min-h-[478px] px-4 py-4   shadow-md bg-[rgba(15,33,63,0.8)] rounded-l-lg ">
        <ul>
        <TaskItem/>
        <TaskItem/>
        </ul>
        </section>
        </>
    )
}