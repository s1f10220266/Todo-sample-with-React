Reactをフロントエンド、Node.jaをバックエンドとして開発したTodoアプリ
開発期間: 1週間程度
React、Githubの復習も兼ねた開発
機能の実装に特化したため、デザインは工夫していない

開発、実行の準備
-Node.js、npm、ナージョン管理ツールnのインストール(Windows)
$ sudo apt install -y nodejs npm
$ sudo npm install -g n
$ sudo  n lts
-Node.js、npm、ナージョン管理ツールnのインストール(Mac)
$ brew install node
$ sudo npm install -g n
$ sudo n lts

-サーバー、mysql-serverの準備
$ npm install express mysql cors
$ sudo apt install mysql-server
$ sudo /etc/init.d/mysql start
$ sudo mysql_secure_installation
$ sudo mysql -u root -p " "
$ ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '<パスワード>';
$ sudo service mysql start
$ sudo mysql
$ CREATE database reactTodoSample;
$ GRANT ALL ON memo_app.* TO 'root'@'localhost';
$ USE reactTodoSample;
$ CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    text VARCHAR(255) NOT NULL,
    isFinished BOOLEAN DEFAULT FALSE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-実行
$ npm init -y
$ npm run start-node
$ npm start