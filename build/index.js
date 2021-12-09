"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var note_routes_1 = require("./router/note.routes");
var path_1 = __importDefault(require("path"));
var PORT = process.env.PORT || 9009;
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/notes", note_routes_1.NotesRouter);
app.get("/", function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '/public/index.html'));
});
app.listen(PORT, function () { return console.log("Server Started on PORT:" + PORT); });
