const express = require('express')
const usercontroller = require('../controller/usercontroller.js')
const positioncontroller = require('../controller/positioncontroller.js')
const UserModal = require('../models/user.js')
const positionmodel = require('../models/position.js')
const securityauth = require('../middlewear/securityauth.js')
// const securityauth2=require('../middlewear/auth2.js')

const route = express.Router()


route.get('/', usercontroller.login)
route.post('/userinsert', usercontroller.userinsert)
route.post('/verifylogin', usercontroller.verifylogin)
route.get('/logout', securityauth, usercontroller.Logout)
route.post('/updateprofile', securityauth, usercontroller.updateprofile)
route.post('/updatepassword', securityauth, usercontroller.updatepassword)
route.get('/DeleteUser/:id', securityauth, usercontroller.DeleteUser)


// product 
route.post('/positioninsert',securityauth,positioncontroller.datainsert)
route.get('/display',securityauth,positioncontroller.positionview)
route.post('/updateposition',securityauth, positioncontroller.updateposition)
route.get('/positiondelete/:id', positioncontroller.deleteposition)








module.exports = route