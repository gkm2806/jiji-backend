import express from 'express';
import Role from '../models/roles';

const RoleRouter = express.Router();

RoleRouter.route('/')
    .get((req, res) => {
        Role.find({}, (err, locais) => {
            res.json(locais)
        })
    })
    .post(async (req, res) => {
        let role = new Role(req.body);
        console.log("req: ", req.body)
        console.log("Role: ", role)
        role.save()
        res.status(201).send(role)
    })

RoleRouter.route('/:id')
    .get(async (req, res) => {
        let findUser = await Role.findOne({ _id: req.params.id })
        if (!findUser) res.status(400).send("No Role found with this id")
        console.log(findUser._doc)
        res.status(200).send(findUser._doc)
    })
    .patch((req, res) => {
        if (req.body._id) {
            delete req.body._id;
        }
        for (let p in req.body) {
            req.role[p] = req.body[p]
        }
        req.role.save()
        res.json(req.role)
    })
    .delete(async(req, res) => {
        try{
            await Role.deleteOne({_id: req.params.id})
                .then(()=>
                    res.sendStatus(200)
                ).catch(()=>
                    res.sendStatus(400)
                )
        }catch(e){
            res.send(e)
        }
    });

export default RoleRouter