import { Schema } from "mongoose";
import { Imagen } from './Imagen';

interface IPruebaDeManejo {
    fecha_agenda: Date;
    fecha_prueba: Date;
    foto: object;
    costo: number;
    duracion: number;
    estatus: string;
};

const pruebaDeManejoSchema = new Schema<IPruebaDeManejo>({
    fecha_agenda: {type: Date, required: true },
    fecha_prueba: {type: Date, required: true },
    foto: [Imagen],
    costo: { type: Number, required: true },
    duracion: {type: Number, required: true },
    estatus: {type: String, required: true }
});

export const PruebaDeManejo = pruebaDeManejoSchema;