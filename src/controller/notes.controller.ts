import { Request, Response } from 'express';
import { MongoClient } from 'mongodb'

let __db: any;

const mongoLocalURI = "mongodb://localhost:27017"

MongoClient.connect(mongoLocalURI)
    .then(client => {
        console.log("Mongo Connected")
        __db = client.db("MERN_TrainingV1")   
    }).catch( err =>{
        console.log(err)
        process.exit(1)
    })


    export const findNotes = (req : Request, res: Response) => {
        __db.collection("notes")
          .find()
          .toArray((err: any, docs: any) => {
              if(err) {
                  return res.send(err)
              }
            return res.json(docs);
          });
    };

export const createNotes = (req : Request, res: Response) =>{
    __db.collection("notes")
    .insertOne({title: "shopping", body: "2km"},
     (err : any, result: any) =>{
        if(err){
            return res.send(err)
        }
        return res.json(result);
     })
};

export const deleteNotes = (req : Request, res: Response) =>{
    __db.collection("notes")
        .deleteOne({title: "walking"}, (err : any, result: any) =>{
            if(err){ 
                return res.send(err)
            }
            return res.json(result);
        })
}

export const updateNotes = (req : Request, res: Response) =>{
    __db.collection("notes")
    .updateOne({title: "walking"},
     {$set:{ body: "3 km everyday"}}, (err : any, result: any) =>{
        if(err){
            return res.send(err)
        }
        return res.json(result);
    })
}
