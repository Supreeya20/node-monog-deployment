import express, { Request, Response }  from "express";
import { NotesRouter } from "./router/note.routes";
import path from "path";
import cors from 'cors';


const app = express()
app.use(cors())
const PORT = process.env.PORT || 9009
app.use(express.json())

app.use("/notes", NotesRouter)

app.get("/", (req : Request, res: Response) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})



app.listen(PORT, () => console.log("Server Started on PORT:"+PORT))