"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNotes = exports.deleteNotes = exports.createNotes = exports.findNotes = void 0;
var mongodb_1 = require("mongodb");
var __db;
var mongoLocalURI = "mongodb://localhost:27017";
mongodb_1.MongoClient.connect(mongoLocalURI)
    .then(function (client) {
    console.log("Mongo Connected");
    __db = client.db("MERN_TrainingV1");
}).catch(function (err) {
    console.log(err);
    process.exit(1);
});
var findNotes = function (req, res) {
    __db.collection("notes")
        .find()
        .toArray(function (err, docs) {
        if (err) {
            return res.send(err);
        }
        return res.json(docs);
    });
};
exports.findNotes = findNotes;
var createNotes = function (req, res) {
    __db.collection("notes")
        .insertOne({ title: "shopping", body: "2km" }, function (err, result) {
        if (err) {
            return res.send(err);
        }
        return res.json(result);
    });
};
exports.createNotes = createNotes;
var deleteNotes = function (req, res) {
    __db.collection("notes")
        .deleteOne({ title: "walking" }, function (err, result) {
        if (err) {
            return res.send(err);
        }
        return res.json(result);
    });
};
exports.deleteNotes = deleteNotes;
var updateNotes = function (req, res) {
    __db.collection("notes")
        .updateOne({ title: "walking" }, { $set: { body: "3 km everyday" } }, function (err, result) {
        if (err) {
            return res.send(err);
        }
        return res.json(result);
    });
};
exports.updateNotes = updateNotes;
