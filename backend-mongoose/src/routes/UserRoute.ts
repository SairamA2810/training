import {Router} from 'express'
import expressAsyncHandler from 'express-async-handler'
import { addNewUser, deleteUserById, loginUser, logout, protectedRoute, readAllUsers, readUserById, readUserByName, updateUserById } from '../controllers/UserController'
import { verifyToken } from '../middlewares/verify'

export const userRouter=Router()

// route for login user
userRouter.post('/user-login',expressAsyncHandler(loginUser))

// route to create new user
userRouter.post('/user',expressAsyncHandler(addNewUser))

// route read all the users
userRouter.get('/users',readAllUsers)

// route to read user by name using query params
userRouter.get("/user",readUserByName)

// route to read user by id using url params
userRouter.get('/user/:id',readUserById)

// route for update the user by id using url param
userRouter.put("/user/:id",updateUserById)

// route to delete the user by id using url param
userRouter.delete("/user/:id",deleteUserById)

// route to access the protected 
userRouter.get('/protected',verifyToken,protectedRoute)

// route for logout
userRouter.get('/logout',logout)