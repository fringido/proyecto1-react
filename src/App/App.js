import React from "react";
import { useTodos } from './useTodo';
import { Header } from "../Header/TodoHeader";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoError } from "../TodoError/TodoError";
import { TodoLoading } from "../TodoLoading/TodoLoading";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos";
import { ModalForm } from "../Modal/formModal/ModalForm";
import { TodoButton } from "../TodoButton/TodoButton";
import { Modal } from "../Modal";
import { EmpytySearchResult } from "../EmpytySearchResult/EmpytySearchResult";

function App() {
    const {
        error,
        loading,
        searchState,
        checkTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        totalTodos,
        completeTodos,
        searchTodo,
        setSearchState,
        addTodo,
    } = useTodos();

    return (
        <React.Fragment>
            <Header loading={loading}>

                <TodoCounter totalTodos={totalTodos}
                    completeTodos={completeTodos}

                />
                <TodoSearch searchState={searchState}
                    setSearchState={setSearchState} />
            </Header>
            <TodoList
                error={error}
                loading={loading}
                searchTodo={searchTodo}
                totalTodos={totalTodos}
                searchText={searchState}
                onError={() => <TodoError />}
                onLoading={() => <TodoLoading />}
                onEmpytyTodos={() => <EmptyTodos />}
                onEmpytySearchResult={(searchText) => <EmpytySearchResult searchText={searchText} />
                }
            >
                {todo => (
                    <TodoItem
                        key={todo.texto}
                        texto={todo.texto}
                        completado={todo.completado}
                        onComplete={() => checkTodo(todo.texto)}
                        onDelete={() => deleteTodo(todo.texto)}
                    />
                )}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <ModalForm addTodo={addTodo}
                        setOpenModal={setOpenModal} />
                </Modal>
            )}

            {!openModal && <TodoButton setOpenModal={setOpenModal} />}
        </React.Fragment>
    );
}

export default App