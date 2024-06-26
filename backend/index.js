//requireでexpress, mysqlモジュールを読み込む
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

//expressモジュールを実体化して変数に代入
const app = express();
app.use(cors());
app.use(express.json());

//ポート番号を指定
const port = 3001;

//mysqlと接続するための設定
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Midnight',
    database: 'reactTodoSample' // データベース名を指定
});

// MySQLに接続
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// タスク取得
app.get("/tasks", (req, res) => {
    let sql = 'SELECT * FROM tasks';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// タスク追加
app.post('/tasks', (req, res) => {
    let task = { title: req.body.title, isFinished: req.body.isFinished, description: req.body.description };
    let sql = 'INSERT INTO tasks SET ?';
    db.query(sql, task, (err, result) => {
        if (err) throw err;
        res.send({ ...task, id: result.insertId });
    });
});

// タスク更新
app.put('/tasks/:id', (req, res) => {
    let sql = `UPDATE tasks SET title = ?, isFinished = ?, description = ? WHERE id = ?`;
    let data = [req.body.title, req.body.isFinished, req.body.description, req.params.id];
    db.query(sql, data, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// タスク削除
app.delete('/tasks/:id', (req, res) => {
    let sql = `DELETE FROM tasks WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.listen(port, () => {
    console.log(`listening on *:${port}`);
});
