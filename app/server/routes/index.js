const route=require('express').Router()
const ProductController=require('../controller/product-controller')
const UserController = require('../controller/user-controller')

const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

route.post('/login',UserController.login)
route.get('/products',authentication,authorization,ProductController.read)
route.post('/products',authentication,authorization,ProductController.create)
route.delete('/products/:id',authentication,authorization,ProductController.delete)
route.put('/products/:id',authentication,authorization,ProductController.update)


module.exports=route