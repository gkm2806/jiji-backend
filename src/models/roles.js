import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const roleModel = new Schema({
    membros: { type: Array, required: true},
    local: { type: String, required: true},
    dono: { type: String, required: true},
    desc: { type: String, required: true},
    cat: { type: String, required: true},
    capacidade: { type: String, required: true},
    qnt: { type: String, required: true},
})

export default mongoose.model('Role', roleModel)