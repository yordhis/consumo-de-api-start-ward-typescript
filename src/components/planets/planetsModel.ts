import {model, Schema} from "mongoose"

const planetsSchema = new Schema({
    nombre: {type: String},
    periodo_de_rotación: {type: String},
    periodo_orbital: {type: String},
    diámetro: {type: String},
    climatizado: {type: String},
    gravedad: {type: String},
    terreno: {type: String},
    Superficie_del_agua: {type: String},
    población: {type: String},
    residentes: {type: Array },
    Película: {type: Array },
    creado: {type: String},
    editado: {type: String},
    url: {type: String}
})


planetsSchema.set('toJSON', {
    transform: (_document: any, returnObject: any) => {
    returnObject.id = returnObject._id
    delete returnObject._id
    delete returnObject.__v
}})

// planetsSchema.set('toJSON', {
//     transform: transcode
//   })

// se crea y exporta el modelo
export const Planets = model('Planets', planetsSchema)


