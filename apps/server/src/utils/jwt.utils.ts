import { readFile } from 'fs/promises'
import jwt from 'jsonwebtoken'
import path from 'path'

import { JWTPayload } from '../types'

export const signJWT = async (
  object: Record<string, string>,
  options?: jwt.SignOptions,
) =>
  jwt.sign(object, process.env.PRIVATE_KEY, {
    ...options,
    algorithm: 'RS256',
  })
export const verifyJwt = async (token: string) => {
  const PUBLIC_KEY = await readFile(
    path.resolve('./config/private.pem'),
    'utf-8',
  )
  try {
    const decoded = (await jwt.verify(token, PUBLIC_KEY, {
      algorithms: ['RS256'],
    })) as JWTPayload
    return { decoded, expired: false, valid: true }
  } catch (error: unknown) {
    return {
      valid: false,
      expired: (error as Error).message === 'jwt expired',
      decoded: null,
    }
  }
}
