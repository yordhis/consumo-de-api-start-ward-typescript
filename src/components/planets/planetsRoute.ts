import {
  getPlanets, getPlanet, createPlanet,
  updatePlanet, deletePlanet, syncPlanetsByMyApi
} from './planetsController'
const express = require('express')
const router = express.Router()

router.get('', getPlanets)
router.get('/:id', getPlanet)
router.post('', createPlanet)
router.put('/:id', updatePlanet)
router.delete('/:id', deletePlanet)

export default router
