const {Router} = require('express')

const routes = Router()

routes.get('/', (request, response)=>{
    return response.json({message: "[Server is running]"})
}) 

module.exports = routes