import { action, makeAutoObservable } from "mobx";

interface Todo {
  text: string;
  checked: boolean;
  description: string;
  
}

class TodoStore {
  todos: Todo[] = [];
  selectedTodo: Todo | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  addTodo = (todo: string) => {
    const newTodo = { text: todo, checked: false, description: '' }; 
    this.todos.push(newTodo);
    this.selectedTodo = newTodo; 
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

  @action
  selectTodo = (index: number) => {
    this.selectedTodo = this.todos[index];
  };


  @action
  handleClick = (index: number) => {
    this.selectTodo(index);
  };
}

const todoStore = new TodoStore();
export default todoStore;
