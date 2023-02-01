import { Response } from "express";

const responseMessage: any = {
    '200':'Consulta exitosa',
    '201':'Creado con exito'
}

const responseHelper = (res: Response, data: any = [], status: number = 200, msg?: string): void =>{
    const message = msg === undefined ? responseMessage[`${status}`] : msg
    const response = { 
        data,
        status,
        message
    }  
    res.status(status).json(response)
}

export {
    responseHelper
}