import {Schema, model} from 'mongoose'

const alumnos_esquema = new Schema({
    name:{
        type:String
    },
    apepat:{
        type:String
    },
    apemat:{
        type:String
    }
})

 export const alumnos = new model('Registro De CURP', alumnos_esquema)