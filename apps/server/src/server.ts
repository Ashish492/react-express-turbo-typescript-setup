import express, { Application, ErrorRequestHandler } from 'express'
import { json, urlencoded } from 'body-parser'
import dotenv from 'dotenv'
import { ZodError } from 'zod'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'
import {} from 'utils/logger'
import morgan from 'morgan'
import routes from './routes'
import createHttpError from 'http-errors'

dotenv.config()
const app: Application = express()
app.use(urlencoded({ extended: true }))
app.use(json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
// app.use(initializePassport())
const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
  if (err instanceof ZodError) {
    res.status(400)
    res.json(err.issues)
    return
  }
  if (err instanceof createHttpError.HttpError) {
    res.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
    })
    return
  }
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid token')
    return
  }
  res.status(err?.statusCode ?? err?.code ?? 500)
  res.json({
    success: false,
    message: err.message ?? 'failed',
  })
}
routes(app)
app.use(errorHandler)
export default app
