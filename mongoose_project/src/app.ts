import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
//parse
app.use(express.json())
app.use(cors())
app.get('/', (req: Request, res: Response) => {
  var a = 10

  res.send(a)
})
console.log(process.cwd())
export default app
