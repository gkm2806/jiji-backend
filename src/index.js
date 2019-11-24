import express from "express";
import cors from "cors"
import bodyParser from "body-parser"
import LocalRouter from "./router/locais"
import './database/mongoose'

const port = process.env.PORT || 4000

var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({origin:"*"}))


app.use('/api/locais', LocalRouter);

console.log("PORT = ", port)
app.listen(port, () => console.log(`Welcome aboard captain, all systems online!`))
