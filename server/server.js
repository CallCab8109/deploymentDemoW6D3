const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors())


const { PORT } = process.env

app.listen(PORT, () => console.log(`Tis listens on the PORT of our lord ${PORT}`))
