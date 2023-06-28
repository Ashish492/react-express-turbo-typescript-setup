import { Application, NextFunction, Request, Response } from 'express'
import createHttpError from 'http-errors'
import { blogRouter } from 'route'

export default function routes(app: Application) {
  app.use('/blog', blogRouter)
  app.use((req: Request, res: Response, next: NextFunction) => {
    next(new createHttpError.NotFound())
  })
}
