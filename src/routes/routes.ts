import express from 'express'
import swapiRouter from '../components/swapi/swapiRouter'
import planetsRouter from '../components/planets/planetsRoute'
import { syncPlanetsByMyApi } from '../components/planets/planetsController'

const router = express.Router()

router.use('/swapis', swapiRouter)
router.use('/planets', planetsRouter)

router.get('/syncupPlanets', syncPlanetsByMyApi)

export default router
