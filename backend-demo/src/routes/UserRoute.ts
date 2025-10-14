import exp from 'express'
import { createNewUser, deleteUser, readUserById, readUsers, updateUser, userByName } from '../controllers/UserController'
import expressAsyncHandler from 'express-async-handler'

export const userApp=exp.Router()

//  get all users
userApp.get('/users',expressAsyncHandler(readUsers))

// get user by id route
userApp.get('/users/:id',readUserById)

// create new user
userApp.post('/users',expressAsyncHandler(createNewUser))

// update user by using id
userApp.put('/user',expressAsyncHandler(updateUser))

// delete user by id
userApp.delete("/users/:id",expressAsyncHandler(deleteUser))

// get user by name using query paramenter
userApp.get("/user",expressAsyncHandler(userByName))