# CURSO TYPESCRIPT

## Configurar Mongoose

- Ejecutar npm i mongoose

```typescript
import mongoose from 'mongoose'

const uri: string = `mongodb+srv://<user>:<password>@tuemprende.wgxw58u.mongodb.net/<base_de_datos>?retryWrites=true&w=majority`;

mongoose.connect(uri)
  .then(()=> console.log("conectado correctamente"))
  .catch(err => console.log("error el conectar", err))
```

## Ccrear Schema y modelo

- Ejecutar npm i mongoose

```typescript
import { model, Schema } from "mongoose";

// se crea el schema
const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre Es requerido']
  },
  age: {
    type: Number,
    required: [true, 'La edad es requerida']
  },
})

// se realiza alguna configuracion a como se debe parsear el json
userSchema.set('toJSON', {
  transform: (_document: any, returnObject: any) => {
  returnObject.id = returnObject._id
  delete returnObject._id
  delete returnObject.__v
}})

// uso el metodo set para transformar el json
userSchema.set('toJSON', {
  transform: tramsfomJson
})

// se crea y exporta el modelo
export const User = model('User', userSchema)
```

## Creando un recursos

```typescript
// se importa el schema
import { User } from './donde se encuente el modelo'

const user = new User(data)
  user.save()
  .then(response => res.json(response))
  .catch(err => res.status(400).json(err))
```

## Obteniendo todos los recursos

```typescript
// se importa el schema
import { User } from './donde se encuente el modelo'

User.find({})
  .then(response => res.json(response))
  .catch(err => res.status(400).json(err))
```

## Obteniendo un recurso

```typescript
// se importa el schema
import { User } from './donde se encuente el modelo'

const id = 'asd545a7sd5as4d5a4s5d'

User.findById(id)
  .then(response => res.json(response))
  .catch(err => res.status(400).json(err))
```

## Actualizando un recurso

```typescript
// se importa el schema
import { User } from './donde se encuente el modelo'

const id = 'asd545a7sd5as4d5a4s5d'

const data = {parametroQueSeActualizara: "solo catualizo los parametros pasados, el resto queda igual"}

const options = {new: true} // pasar este parametro para que devuelva la data actualizada, ya que de lo contrario de vuelve la data si la actualización

User.findByIdAndUpdate(id, data)
  .then(response => res.json(response))
  .catch(err => res.status(400).json(err))
```

## Eliminando un recurso

```typescript
// se importa el schema
import { User } from './donde se encuente el modelo'

const id = 'asd545a7sd5as4d5a4s5d'

User.findByIdAndDelete(id)
  .then(response => res.json(response))
  .catch(err => res.status(400).json(err))
```

## Cerrando Session

Se recomienda cerrar la cesion si no se va a utiliar más

```typescript
import mongoose from 'mongoose'
mongoose.connection.close()
```
