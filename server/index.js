require('dotenv').config()

const  express = require('express')

const sequelize = require('./db')

const models = require('./models/models')

const cors = require('cors')

const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const app = express()

const router = require('./routes/index')

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.use(errorHandler)//Должен регистрироватся в конце
const start = async() => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=>
            console.log(`Server started on port : ${PORT}`))
    }
    catch (e){
        console.log(e)
    }
}

const PORT = process.env.PORT || 5000

start()

