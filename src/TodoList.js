import TodoItem from "./TodoItem";

const TodoList = ({tasks, onRemove, onToggle, onUpdate}) => {
    return (
        <div>
            {tasks.map((task) => (
                <TodoItem 
                task={task}
                onRemove={onRemove}
                onToggle={onToggle}
                onUpdate={onUpdate}
                key={task.id}
                />
            ))}
        </div>
    );
}

export default TodoList; 