import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "reactquiz"
})

app.get('/', (req, res) => {
    return res.json('From Backend')
})

app.get('/narutoquiz', (req, res) => {
    const sql = 'SELECT * FROM narutoquiz'
    db.query(sql, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8081, () => {
    console.log('listening')
})