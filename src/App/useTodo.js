import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function useTodos() {
  const {
    item: todo,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchState, setSearchState] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false)

  const completeTodos = todo.filter((todo) => !!todo.completado).length;
  const totalTodos = todo.length;

  let searchTodo = [];

  if (!searchState.length >= 1) {
    searchTodo = todo;
  } else {
    searchTodo = todo.filter((todo) => {
      const todoText = todo.texto.toLowerCase();
      const serchText = searchState.toLowerCase();
      return todoText.includes(serchText);
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todo];
    newTodos.push({
      completado: false,
      texto: text,
    });
    saveTodos(newTodos);
  };
  const checkTodo = (text) => {
    const newTodo = [...todo];
    const indext = todo.findIndex((d) => d.texto === text);
    newTodo[indext].completado = true;
    saveTodos(newTodo);
  };

  const deleteTodo = (text) => {
    const newTodo = todo.filter((d) => d.texto !== text);
    saveTodos(newTodo);
  };




  return {
    loading,
    error,
    totalTodos,
    completeTodos,
    searchState,
    setSearchState,
    searchTodo,
    addTodo,
    deleteTodo,
    openModal,
    checkTodo,
    setOpenModal,
  };
}

export { useTodos };
