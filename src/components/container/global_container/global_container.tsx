// import "../container.css"

import TaskButtons from "../../buttons/task_buttons";
import Editor from "../../editor/editor";
import TaskList from "../tasks cont/task_list_cont";

export default function GlobalContainer() {
    return (
        <div className="min-w-[90%] mx-auto min-h-[478px] flex flex-col items-start text-left">
            <div >
            <TaskButtons/>
            </div>
            <div className="flex flex-row min-w-[100%] m-0  items-center">
                <TaskList/>
                <Editor/>
            </div>
            
        </div>
    );
}