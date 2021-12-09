"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesRouter = void 0;
var express_1 = __importDefault(require("express"));
var notes_controller_1 = require("../controller/notes.controller");
var NotesRouter = express_1.default.Router();
exports.NotesRouter = NotesRouter;
// http://localhost:9004/notes
NotesRouter.route("/")
    .get(notes_controller_1.findNotes)
    .post(notes_controller_1.createNotes)
    .delete(notes_controller_1.deleteNotes)
    .patch(notes_controller_1.updateNotes);
