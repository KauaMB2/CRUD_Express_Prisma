import { create, getAllUsers, getUserById, remove, update } from "../controllers/user.controller";
import { Express } from "express";

const userRoutes = (app:Express)=>{
    app.post('/user', create)
    app.get('/users', getAllUsers)
    app.get('/user/:id', getUserById)
    app.put('/user/:id', update)
    app.delete('/user/:id', remove)
}

export default userRoutes