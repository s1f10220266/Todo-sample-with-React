import { useState } from "react";

const TodoItem = ({ task, onRemove, onToggle, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDescription, setNewDescription] = useState(task.description);

  const itemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 10,
    borderTop: "1px solid #dee2e6"
  };
  const checkboxStyle = { cursor: "pointer", marginRight: 10 };
  const titleStyle = {
    flex: 1,
    textDecoration: task.isFinished ? 'line-through' : 'none'
  };
  const descriptionStyle = {
    flex: 1,
    marginTop: 5,
    resize: "none",
    marginLeft: 60
  };
  const saveBtnStyle = { cursor: "pointer", marginTop: 10, marginLeft: 20, width: "120px" };
  const deleteBtnStyle = { cursor: "pointer", marginTop: 10, marginLeft: 340, width: "120px" };

  const handleSave = () => {
    onUpdate(task.id, newTitle, newDescription);
    setIsEditing(false);
  };

  return (
    <div style={itemStyle}>
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <input
          type="checkbox"
          checked={task.isFinished}
          style={checkboxStyle}
          onChange={() => onToggle(task.id)}
        />
        {isEditing ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            style={{ flex: 1 }}
          />
        ) : (
          <div style={titleStyle} onClick={() => setIsEditing(true)}>
            {task.title}
          </div>
        )}
      </div>
      {isEditing ? (
        <>
          <div style={{display: "flex", alignItems: "center"}}>
            <textarea
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="メモを入力できます"
              style={{marginTop: 5, resize: "none", width: "340px" }}
            />
            <button style={saveBtnStyle} onClick={handleSave}>保存/戻る</button>
          </div>
        </>
      ) : (
        task.description && (
          <div style={descriptionStyle}>
            {task.description}
          </div>
        )
      )}
      {!isEditing && (
        <button style={deleteBtnStyle} onClick={() => onRemove(task.id)}>削除</button>
      )}
    </div>
  );
};

export default TodoItem;
