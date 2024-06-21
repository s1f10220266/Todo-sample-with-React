const TodoItem = () => {
    const itemStyle = {
        display: "flex", alignItems: "centor",
        padding: 10,
        borderTop: "1px solid #dee2e6"
    }
    const checkboxStyle = {cursor: "pointer"}
    const textStyle = {flex: 1, marginLeft: 10}
    const btnStyle = {cursor: "pointer"}
    return (
        <div style={itemStyle}>
            <input type="checkbox" checked={false} style={checkboxStyle}></input>
            <div style={textStyle}>Task: do something</div>
            <button style={btnStyle}>削除</button>
        </div>
    );
}
export default TodoItem;