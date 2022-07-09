const express=require("express");
const route=express.Router();
const services= require("./../services/render")
const controller =require("./../controller/controller")

route.get('/',services.homeRoutes)
route.get('/add_user', services.addUser)
route.get('/update_user',services.updateUser)
route.get('/view_user', services.viewUser);
//Api
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.get('/api/users/:id', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports=route;