import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const localModel = new Schema({
    nome: { type: String, required: true},
    endereco: { type: String, required: true},
    categoria: { type: String, required: true},
    capacidade: { type: Number, required: true},
    qnt_atual: { type: Number, required: true},
})

export default mongoose.model('Local', localModel)