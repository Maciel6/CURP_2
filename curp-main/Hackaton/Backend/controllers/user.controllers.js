import { alumnos } from "../modules/user.model.js";

export const test = () => {
    console.log('llamando la funcion desde el controlador (no se te ocurrio un chiste)')
}

alumnos.create({
    name:'Yoshi',
    apepat:'Huevo',
    apemat:'Revuelto'
})