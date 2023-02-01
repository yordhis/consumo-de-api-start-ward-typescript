/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from 'mongoose'
import { Planets } from './planetsModel'
import { Next, Req, Res } from '../../type'
import { Console } from 'console'
import axios from 'axios'
import { helperMapKeySpanish } from '../swapi/helpers/helperMapKeySpanish'
import { helperCreatePlanet } from './helpers/planetsHelpers'
import createHttpError from 'http-errors'
import { responseHelper } from '../../helpers/responseHelper'
import { nextTick } from 'process'

const c = console.log

const getPlanets = (_req: Req, res: Res) => {
  Planets.find()
    .then(response => responseHelper(res, response))
    .catch(err => res.status(400).json(err))
}

const getPlanet = (req: Req, res: Res) => {
  const { id } = req.params
  Planets.findById(id)
    .then(response => {
      if (response === null) {
        return responseHelper(res)
      }
      responseHelper(res, response)
    })
    .catch(err => res.status(400).json(err))
}

const createPlanet = (req: Req, res: Res) => {
  const data = req.body

  const planet = new Planets(data)
  planet.save()
    .then(response => responseHelper(res, response))
    .catch(err => responseHelper(res, err, 503, err.message))
}

const updatePlanet = async (req: Req, res: Res, next: Next) => {
  const data = req.body
  const id = req.params.id

  try {
    // crear el arreglo para las peliculas y residentes
    const planet: any = await Planets.findById(id)
    if (planet === null) {
      throw createHttpError(400, 'Planeta no existe')
    }
    const residentes: string[] = planet.residentes
    if (residentes.includes(data.residentes)) {
      throw createHttpError(400, 'Residente ya existe')
    }
    const newData = {
      ...data,
      residentes: [...residentes, data.residentes]
    }

    const response = await Planets.findByIdAndUpdate(id, newData)
    res.status(200).json(response)
  } catch (error: any) {
    next(error)
  }
}

const deletePlanet = (req: Req, res: Res) => {
  const { id } = req.params
  Planets.findByIdAndDelete(id)
    .then(response => res.json(response))
    .catch(err => res.status(400).json(err))
}

const syncPlanetsByMyApi = async (_req: Req, res: Res, next: Next): Promise<void> => {
  console.log('En sincronizacion de planetas')
  try {
    const { data } = await axios('https://swapi.py4e.com/api/planets')
    const { resultados }: any = helperMapKeySpanish(data, 'planets')

    for (const planet of resultados) {
      const newPlanet = new Planets(planet)
      newPlanet.save()
    }
    const message: string = 'Se completo la sincronización'
    res.status(200).json(message)
  } catch (error) {
    next(error)
  }
}

export {
  getPlanets,
  getPlanet,
  createPlanet,
  updatePlanet,
  deletePlanet,
  syncPlanetsByMyApi
}
