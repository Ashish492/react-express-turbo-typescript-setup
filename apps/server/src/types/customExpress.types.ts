import { NextFunction, Request, Response } from 'express'
// eslint-disable-next-line import/no-extraneous-dependencies
import * as core from 'express-serve-static-core'

export interface MyRequest<
  B = unknown,
  P extends core.ParamsDictionary = Record<string, never>,
  Q extends qs.ParsedQs = Record<string, never>,
> extends Request {
  body: B
  params: P
  query: Q
}
export type CustomRouteFunction<
  B = unknown,
  P extends core.ParamsDictionary = Record<string, never>,
  Q extends qs.ParsedQs = Record<string, never>,
> = (req: MyRequest<B, P, Q>, res: Response, next: NextFunction) => any
