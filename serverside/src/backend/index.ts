import express from 'express'
import messageController from './controllers/message'

const app: express.Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/messages", messageController)

app.listen(3001, () => {
    console.log('launch express 3001 port')
})