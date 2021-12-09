import express from "express";
import { createNotes, deleteNotes, findNotes, updateNotes } from "../controller/notes.controller";


const NotesRouter = express.Router();

// http://localhost:9004/notes
NotesRouter.route("/")
  .get(findNotes)
  .post(createNotes)
  .delete(deleteNotes)
  .patch(updateNotes)

export { NotesRouter };
