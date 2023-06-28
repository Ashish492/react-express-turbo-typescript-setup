import { NextFunction, Request, Response } from 'express'
import createHttpError from 'http-errors'
import { CustomRouteFunction, MyRequest } from '../types'
// eslint-disable-next-line import/no-extraneous-dependencies
import { ParamsDictionary } from 'express-serve-static-core'

type BasicFun<
  P extends ParamsDictionary = Record<string, never>,
  Q extends Record<string, unknown> = Record<string, never>,
> = (
  req: Request<P, any, any, Q>,
  res: Response<any>,
  next: NextFunction,
) => any
export function customRouteFunction<
  B,
  P extends ParamsDictionary,
  Q extends qs.ParsedQs,
>(fn: CustomRouteFunction<B, P, Q>): BasicFun<P, Q> {
  return (req, res, next) => {
    fn(req as MyRequest<B, P, Q>, res, next).catch(next)
  }
}
export const runService = async <T>(
  fn: (...args: unknown[]) => T,
  msg?: string,
): Promise<T | void> => {
  try {
    return fn() // Added "await" keyword to properly handle the asynchronous function
  } catch (error) {
    throw createHttpError(500, msg ?? 'Internal Server Error', { cause: error })
  }
}
