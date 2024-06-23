import TodoItem from "./TodoItem";

const TodoList = ({todos, onRemove, onToggle}) => {
    return (
        <div>
            {
                todos.map((todo) => <TodoItem todo={todo} onRemove={onRemove} onToggle={onToggle} key={todo.id}/>)
            }
        </div>
    );
}

export default TodoList; 