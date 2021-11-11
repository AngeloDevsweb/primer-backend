import express from 'express'
import RutasTarea from './routes/tareas.routes'
import cors from 'cors'

const app = express()
//configuiracion
app.set('port', process.env.PORT || 4000)

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//rutas 
app.get('/', (req, res) => {
    res.json({mensaje : 'Bienvenido a mi aplicacion'})
})

app.use('/api/tareas', RutasTarea)

export default app
