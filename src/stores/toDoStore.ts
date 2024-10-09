import { action, makeAutoObservable } from "mobx";

interface Todo {
  text: string;
  checked: boolean;
  id: number;
  description: string;
  subtasks?: string
}

class TodoStore {
  todos: Todo[] = [];
  lastId = 0;
  selectedTodo: Todo | null = null;
  showPortal = false;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  addTodo = (todo: string) => {
    const newTodo = { text: todo, checked: false, description: '', id: ++this.lastId }; 
    this.todos.push(newTodo);
    this.selectTodo(this.todos.length - 1);
  };

  @action
  updateDescription = (description: string) => {
    if (this.selectedTodo) {
      this.selectedTodo.description = description;
    }
};

  @action
  toggleTodo = (index: number) => {
    this.todos[index].checked = !this.todos[index].checked;
  };

  @action
  removeTodo = (index: number) => {
    const todoToRemove = this.todos[index];
    this.todos.splice(index, 1);
    
    if (this.selectedTodo === todoToRemove) {
      this.selectedTodo = null;
    }
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
    const todo = this.todos[index];
    if (todo) {
      this.selectedTodo = todo;
    } else {
      this.selectedTodo = null; 
    }
  };

  @action
  updateSelectedTodoDescription = (description: string) => {
    if (this.selectedTodo) {
      this.selectedTodo.description = description;
    }
  };
  
  removeCheckedTodos = () => {
    const checkedTodos = this.todos.filter(todo => todo.checked);
    this.todos = this.todos.filter(todo => !todo.checked);
    if (checkedTodos.includes(this.selectedTodo!)) { 
      this.selectedTodo = null;
    }
  };

  @action
  handleClick = (index: number) => {
    this.selectTodo(index);
  };


  @action
  addSubtask = (id: number, index: number) => {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
        this.showPortal = true; 
    }
};

  @action
  closePortal = () => {
      this.showPortal = false; 
  };
}

const todoStore = new TodoStore();
export default todoStore;
