import {Router} from 'express'
import expressAsyncHandler from 'express-async-handler'
import { addNewUser, deleteUserById, loginUser, readAllUsers, readUserById, readUserByName, updateUserById } from '../controllers/UserController'

export const userRouter=Router()

// route to login user
userRouter.post('/User',expressAsyncHandler(loginUser))

// route to create new user
userRouter.post('/user',expressAsyncHandler(addNewUser))


// route read all the users
userRouter.get('/users',readAllUsers)

// route to read user by name using query params
userRouter.get("/user",readUserByName)

// route to read user by id using url params
userRouter.get('/user/:id',readUserById)

// route to update the user by id using url param
userRouter.put("/user/:id",updateUserById)

// route to delete the user by id using url param
userRouter.delete("/user/:id",deleteUserById)