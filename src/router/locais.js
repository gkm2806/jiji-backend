import express from 'express';
import Local from '../models/local';

const LocalRouter = express.Router();

LocalRouter.route('/')
    .get((req, res) => {
        Local.find({}, (err, locais) => {
            res.json(locais)
        })
    })
    .post(async (req, res) => {
        let local = new Local(req.body);
        console.log("req: ", req.body)
        console.log("Local: ", local)
        local.save()
        res.status(201).send(local)
    })

LocalRouter.route('/:LocalId')
    .get(async (req, res) => {
        let findUser = await Local.findOne({ _id: req.params.LocalId })
        if (!findUser) res.status(400).send("No Local found with this id")
        console.log(findUser._doc)
        res.status(200).send(findUser._doc)
    })
    .patch((req, res) => {
        if (req.body._id) {
            delete req.body._id;
        }
        for (let p in req.body) {
            req.local[p] = req.body[p]
        }
        req.local.save()
        res.json(req.local)
    })
    .delete(async(req, res) => {
        try{
            await Local.deleteOne({_id: req.params.LocalId})
                .then(()=>
                    res.sendStatus(200)
                ).catch(()=>
                    res.sendStatus(400)
                )
        }catch(e){
            res.send(e)
        }
    });

export default LocalRouter