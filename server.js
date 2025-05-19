import express from 'express'
import { createServer as createViteServer } from 'vite'
//import path from 'path'
//import { fileURLToPath } from 'url'

//const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()

async function startServer() {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  })

  app.use(vite.middlewares)

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl
      const template = await vite.transformIndexHtml(
        url,
        '<!DOCTYPE html><html><head><title>SetalA</title></head><body><div id="app"></div><script type="module" src="/src/main.ts"></script></body></html>',
      )

      res.status(200).set({ 'Content-Type': 'text/html' }).end(template)
    } catch (e) {
      vite.ssrFixStacktrace(e)
      console.error(e)
      res.status(500).end(e.message)
    }
  })

  const PORT = process.env.PORT || 3000

  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`)
  })
}

startServer()
