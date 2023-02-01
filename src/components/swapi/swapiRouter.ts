/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { verifyParam } from './middleware/verifyParam'
import { getResourcesSwapis, getResourcesSwapi, getFiltersResourcesSwapis } from './swapiController'
const router = express.Router()

// creamos los parametro de manera dinamica
router.get('/:resource', verifyParam, getResourcesSwapis)
router.get('/:resource/:id', verifyParam, getResourcesSwapi)
router.post('/:resource', getFiltersResourcesSwapis)

export default router
