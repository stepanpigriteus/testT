import { action, makeAutoObservable } from "mobx";

interface Todo {
  text: string;
  checked: boolean;
}

class TodoStore {
  todos: Todo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo = (todo: string) => {
    this.todos.push({ text: todo, checked: false }); // Добавляет новую задачу в массив
  };

  @action
  toggleTodo = (index: number) => {
    this.todos[index].checked = !this.todos[index].checked;
  };

  @action
  removeTodo = (index: number) => {
    this.todos.splice(index, 1);
  };

  @action
  selectAll = () => {
    this.todos.forEach(todo => {
      todo.checked = true;
    });
  };

  @action
  deselectAll = () => {
    this.todos.forEach(todo => {
      todo.checked = false;
    });
  };
}

const todoStore = new TodoStore();
export default todoStore;
