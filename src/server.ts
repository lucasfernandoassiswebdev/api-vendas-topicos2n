import express from 'express'
import cors from 'cors'

const servidor = express();

servidor.use(cors())
servidor.use(express.json())

const port = 3333

servidor.listen(port, () => {
    console.log(`Server up and running on port ${port}`)
})