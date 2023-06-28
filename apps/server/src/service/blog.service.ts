import { Blog } from 'shared'
import db from 'utils/db.server'

export async function findAll() {
  const result = await db.post.findMany()
  return result
}
export async function insert(data: Omit<Blog, 'id'>) {
  const newBlog = await db.post.create({ data })
  return newBlog
}
