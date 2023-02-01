import createError from 'http-errors'
import { ErrorHandler, Next, Req, Res } from '../type'

const notFound = (req: Req, _res: Res, next: Next): void => {
  const error = {
    path: req.path,
    method: req.method,
    msg: 'Ruta o metodo invalido'
  }

  next(createError(404, error))
}

const helperError: ErrorHandler = (err: any, _req: Req, res: Res, _next: Next): void => {
  const status = err.status === undefined ? 500 : err.status
  res.status(status)
  res.json(err)
}

export { notFound, helperError }
