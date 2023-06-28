import { insert } from 'service'
import { findAll } from 'service/blog.service'
import { Blog } from 'shared'
import { CustomRouteFunction } from 'types'
export const createBlog: CustomRouteFunction<Omit<Blog, 'id'>> = async (
  req,
  res,
) => {
  const blog = await insert(req.body)
  res.json(blog)
}
export const getBlog: CustomRouteFunction = async (req, res) => {
  const blog = await findAll()
  res.json(blog)
}
