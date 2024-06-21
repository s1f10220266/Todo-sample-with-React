const TodoInput = () => {
    const formStyle = {
        display: "flex"
    }
    const inputStyle = {
        backgroundColor: "darkgrey", border: "none",
        outline: "none", fontSize: 16, color: "white",
        lineHeght: 2, flex: 1
    }
    const btnStyle = {
        backgroundColor: "dimgrey", border: "none",
        color: "white", fontSize: 16, cursor: "pointer",
        paddingLeft: 15, paddingRight: 15
    }
    return (
        <form style={formStyle}>
            <input placeholder="タスクを入力してください" style={inputStyle}></input>
            <button type="submit" style={btnStyle}>追加</button>
        </form>
    );
}
export default TodoInput;