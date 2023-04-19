import { Schema } from "mongoose";

interface IImagen {
    nombre: string;
    fecha_de_subida: Date;
    link: string;
};

const imagenSchema = new Schema<IImagen>({
    nombre: { type: String, required: true },
    fecha_de_subida: {type: Date, required: true },
    link: { type: String, required: true }
});

export const Imagen = imagenSchema;