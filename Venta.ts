import { Schema } from "mongoose";
import { PruebaDeManejo } from "./PruebaDeManejo";

interface IOpinion {
    puntuacion: number;
    fecha: Date;
}

const opinionSchema = new Schema<IOpinion>({
    puntuacion: {type: Number, required: true },
    fecha: {type: Date, required: true }
})

interface IVenta {
    vendedor_id: string;
    usuario_comprador_id: string;
    automovil_id: string;
    tipo_subasta: boolean;
    tipo_venta: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    completada: boolean;
    estatus: string;
    costo_total: number;
    opiniones_al_vendedor: object[];
    prueba_de_manejo: object;
};

const ventaSchema = new Schema<IVenta>({
    vendedor_id: { type: String, required: true },
    usuario_comprador_id: { type: String, required: true },
    automovil_id: { type: String, required: true },
    tipo_subasta: { type: Boolean, required: true },
    tipo_venta: { type: String, required: true}, //???
    fecha_inicio: { type: Date, required: true },
    fecha_fin: { type: Date }, // No es requerida al momento de iniciar la venta
    completada: { type: Boolean, required: true},
    estatus: {type: String, required: true },
    costo_total: { type: Number, required: true },
    opiniones_al_vendedor: [opinionSchema],
    prueba_de_manejo: [PruebaDeManejo]
});

export const Venta = ventaSchema;