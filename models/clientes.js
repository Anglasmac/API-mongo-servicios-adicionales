import { Schema, model } from "mongoose";

const ClientesSchema = new Schema({
    nombrecliente: {
        type: String,
        required: [true, "The field 'nombre cliente' is required"],
        maxlength: [50, 'Max 50 characters'], 
        trim: true,
        uppercase: true
    },
    distintivo: {
        type: String,
        required: [true, "The field ' distintivo' is required"],
        maxlength: [50, 'Max 50 characters'], 
        trim: true,
        uppercase: true
    },
    categoriacliente: {
        type: String,
        required: [true, "The field 'categoria cliente' is required"],
        maxlength: [70, 'Max 70 characters'], 
        trim: true,
        uppercase: true
    },
    celular: {
        type: String,
        required: [true, "The field 'celular ' is required"],
        maxlength: [20, 'Max 20 characters'], 
        trim: true,
        uppercase: true
    },
    correo: {
        type: String,
        required: [true, "The field ' correo' is required"],
        maxlength: [80, 'Max 80 characters'], 
        trim: true,
        uppercase: true
    },
    direccion: {
        type: String,
        required: [true, "The field 'direccion ' is required"],
        maxlength: [50, 'Max 50 characters'], 
        trim: true,
        uppercase: true
    },
});

export default model('Clientes', ClientesSchema, 'clientes');