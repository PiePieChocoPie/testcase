const Apierror = require('../error/APIerror')

module.exports = function (err,req,res,next){
    if (err instanceof  Apierror){
        return res.status(err.status).json({message: err.message})
    }
    return res.status(500).json({message: "Неизвестная ошибка"})
}