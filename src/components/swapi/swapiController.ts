/* eslint-disable n/no-deprecated-api */

import axios from 'axios'
import { Next, Req, Res } from '../../type'
import { helperMapKeySpanish } from './helpers/helperMapKeySpanish'
import url from 'url'

const getResourcesSwapis = async (req: Req, res: Res, next: Next): Promise<void> => {
  try {
    const { resource } = req.params

    // console.log(resource)
    const { data } = await axios(`https://swapi.py4e.com/api/${resource}`)

    const response = helperMapKeySpanish(data, resource)

    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}

const getResourcesSwapi = async (req: Req, res: Res, next: Next): Promise<void> => {
  try {
    const { resource, id } = req.params
    // console.log(resource)
    const { data } = await axios.get(`https://swapi.py4e.com/api/${resource}/${id}`)

    const response = helperMapKeySpanish(data, resource)

    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}

const getFiltersResourcesSwapis = async (req: Req, res: Res, _next: Next): Promise<void> => {
  const { resource } = req.params
  const urlParse = url.parse(req.url)
  // parametroDeBusqueda = parametroDeBusqueda.split('/')
  const search = urlParse.query
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  const urlBusqueda = 'https://swapi.py4e.com/api/' + resource + '/?' + search
  console.log(urlBusqueda)
  const { data }: any = await axios.get(`${urlBusqueda}`)

  const response = helperMapKeySpanish(data, resource)

  res.status(200).json(response)
}

export {
  getResourcesSwapis,
  getResourcesSwapi,
  getFiltersResourcesSwapis
}
