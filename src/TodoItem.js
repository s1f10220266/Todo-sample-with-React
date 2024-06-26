import { useState } from "react";

const TodoItem = ({ task, onRemove, onToggle, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDescription, setNewDescription] = useState(task.description);

  const itemStyle = {
    display: "flex", alignItems: "center",
    padding: 10,
    borderTop: "1px solid #dee2e6"
  };
  const checkboxStyle = { cursor: "pointer" };
  const titleStyle = {
    flex: 1,
    marginLeft: 10,
    textDecoration: task.isFinished ? 'line-through' : 'none'
  };
  const descriptionStyle = {
    flex: 1,
    marginLeft: 10
  };
  const btnStyle = { cursor: "pointer" };

  const handleSave = () => {
    onUpdate(task.id, newTitle, newDescription);
    setIsEditing(false);
  };

  return (
    <div style={itemStyle}>
      <input
        type="checkbox"
        checked={task.isFinished}
        style={checkboxStyle}
        onChange={() => onToggle(task.id)}
      />
      {isEditing ? (
        <div style={{ flex: 1, marginLeft: 10 }}>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleSave}>保存/戻る</button>
        </div>
      ) : (
        <div style={{ flex: 1 }}>
          <div style={titleStyle} onClick={() => setIsEditing(true)}>
            {task.title}
          </div>
          {task.description && (
            <div style={descriptionStyle}>
              {task.description}
            </div>
          )}
        </div>
      )}
      <button style={btnStyle} onClick={() => onRemove(task.id)}>削除</button>
    </div>
  );
};

export default TodoItem;
