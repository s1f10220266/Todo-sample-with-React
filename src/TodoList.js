import TodoItem from "./TodoItem";

const TodoList = ({todos, onRemove}) => {
    return (
        <div>
            {
                todos.map((todo) => <TodoItem todo={todo} onRemove={onRemove} key={todo.id}/>)
            }
        </div>
    );
}

export default TodoList; 