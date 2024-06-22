import {useState} from "react";

const TodoInput = ({onAdd}) => {
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
    const [task, setTask] = useState('');
    const handleChange = (event) => { setTask(event.target.value); }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (task === '') return;
        onAdd(task);
        setTask('');
    }
    return (
        <form style={formStyle} onSubmit={handleSubmit}>
            <input placeholder="タスクを入力してください" onChange={handleChange} value={task} style={inputStyle}></input>
            <button type="submit" style={btnStyle}>追加</button>
        </form>
    );
}
export default TodoInput;