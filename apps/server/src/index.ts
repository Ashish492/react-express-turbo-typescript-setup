import app from './server'
import http from 'http'
import { logger } from 'utils/logger'

const start = async () => {
  const { PORT } = process.env
  try {
    const server = http.createServer(app)

    server.listen(5000, () => {
      logger.info(`server running on http://localhost:${PORT}`)
    })
  } catch (error) {
    logger.error(error)
    logger.error('unable to start server')
  }
}
start()
// uncomment to use cluster
// if (cluster.isPrimary) {
//   for (let i = 0; i < os.cpus().length; i++) {
//     /* making child process */
//     cluster.fork()
//   }
//   /* make new instance if server is crashed */
//   cluster.on("exit", () => {
//     cluster.fork()
//   })
// } else {
// start()
//   )
// }
