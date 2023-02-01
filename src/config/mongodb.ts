import  mongoose  from "mongoose";
import { mongoKey } from "../constants/mongoKey"

mongoose.set('strictQuery', false)
mongoose.connect(mongoKey.URI)
.then((_db)=>{
        console.log('Conexión exitosa')
}).catch((err)=>{
        console.log('Ha ocurrido un error en la conexión. Error: ' + err)
})
