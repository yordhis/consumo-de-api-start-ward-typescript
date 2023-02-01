import express from 'express'
import { notFound, helperError } from './middleware/error'
import router from './routes/routes'
import './config/mongodb'
const app = express()

app.set('title', 'Start Ward Spanis')
app.set('port', 3000)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(router)

app.use(notFound)
app.use(helperError)

app.listen(app.get('port'), () => {
  console.log('corriendo en el puerto 3000')
})
