import { createBlog, getBlog } from 'controller'
import { Router } from 'express'
import { customRouteFunction } from 'utils'

const blogRouter = Router()
blogRouter
  .route('/')
  .post(customRouteFunction(createBlog))
  .get(customRouteFunction(getBlog))
export default blogRouter
