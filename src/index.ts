import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json({ message: 'Hello Hono! - Testing PROD release' })
})

export default app
