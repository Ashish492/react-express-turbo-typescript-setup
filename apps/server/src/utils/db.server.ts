/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prefer-const */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-var */
/* eslint-disable no-underscore-dangle */
import { PrismaClient } from '@prisma/client'
let db: PrismaClient
declare global {
  // eslint-disable-next-line vars-on-top
  var __DB: PrismaClient | undefined
}
if (!global.__DB) {
  global.__DB = new PrismaClient()
}
db = global.__DB
export default db
// import { PrismaClient } from '@prisma/client'
// let db: PrismaClient
// if (!db) {
//   db = new PrismaClient()
// }
// export default db
