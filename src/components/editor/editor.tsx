import { observer } from "mobx-react-lite";
import todoStore from "../../stores/toDoStore";


function Editor() {
    const { selectedTodo } = todoStore;
    return(
        <section className="flex flex-col min-w-[40%] m-0 min-h-[478px] py-4 pl-2 bg-[rgba(255,255,255,0.8)] rounded-br-lg rounded-tr-lg shadow-md border border-gray-300">
              <h3 className="text-2xl pl-1 font-medium  text-left">{selectedTodo?.text}</h3>
              {selectedTodo ? (
                    <textarea
                        value={selectedTodo.description}
                        onChange={(e) => {
                            todoStore.updateSelectedTodoDescription(e.target.value);
                        }}
                        placeholder="Описание задачи"
                        className="w-full flex-1 pl-1.5 pt-3 max-w-[95%] resize-none"
                    />
                ) : (
                    <h3 className="text-center" >Выберите задачу для редактирования</h3>
                )}
            </section>
    )
}

export default observer(Editor)