import { Schema, model } from "mongoose";

const ServiciosSchema = new Schema({
    nombreservicio: {
        type: String,
        required: [true, "The field 'plate' is required"],
        maxlength: [6, 'Max 6 characters'], 
        trim: true,
        uppercase: true
    },
   
   
   
});

export default model('Servicios', ServiciosSchema, 'servicios');