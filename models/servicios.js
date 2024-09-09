import { Schema, model } from "mongoose";

const ServiciosSchema = new Schema({
    nombreservicio: {
        type: String,
        required: [true, "The field 'nombre service' is required"],
        maxlength: [50, 'Max 50 characters'], 
        trim: true,
        uppercase: true
    },
   
   
   
});

export default model('Servicios', ServiciosSchema, 'servicios');