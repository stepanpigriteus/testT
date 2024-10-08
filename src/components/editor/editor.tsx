import { observer } from "mobx-react-lite";
import todoStore from "../../stores/toDoStore";


function Editor() {
    const { selectedTodo } = todoStore;
    return(
            <section  className="min-w-[40%] m-0 min-h-[478px] py-4 pt-6 bg-[rgba(255,255,255,0.8)] rounded-br-lg rounded-tr-lg shadow-md border border-gray-300"> 
              {selectedTodo ? (
                    <textarea
                    value={selectedTodo.description}
                    onChange={(e) => {
                        selectedTodo.description = e.target.value; 
                    }}
                    placeholder="Описание задачи"
                    className="w-full h-full p-2"
                    />
                ) : (
                    <h3 className="text-center" >Выберите задачу для редактирования</h3>
                )}
            </section>
    )
}

export default observer(Editor)