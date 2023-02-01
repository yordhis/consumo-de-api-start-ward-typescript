/* eslint-disable use-isnan */
import createHttpError from 'http-errors'
import { Next, Req, Res } from '../../../type'
import { schemas } from '../schema/schemas'

export const verifyParam = (req: Req, _res: Res, next: Next): void => {
  const expNum: RegExp = /^[1-9-0]+$/
  try {
    const { resource } = req.params
    const id: string = req.params.id
    if (!Object.keys(schemas).includes(resource)) {
      throw new Error('El recurso no valido')
    }

    if (id !== undefined) {
      if (!expNum.test(id)) {
        throw new Error('El id no es valido')
      }
    }

    next()
  } catch (error: any) {
    next(createHttpError.BadRequest(error.message))
  }
}
