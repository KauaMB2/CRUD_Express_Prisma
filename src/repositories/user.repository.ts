import prisma from "../services/prisma";
import { User } from "../utils/models/User"

export const createUser = async (data:User)=>{
    const user=await prisma.user.create({
        data,
        select:{//Define which datas must be returned to the frontend and which data must not
            id: true,
            name: true,
            email: true,
            password: false,
            phone: true,
            createdAt: true,
            updatedAt: true,
        }
    })
    return user
}

export const getAll = async ()=>{
    const users=await prisma.user.findMany({
        select:{//Define which datas must be returned to the frontend and which data must not
            id: true,
            name: true,
            email: true,
            password: false,
            phone: true,
            createdAt: true,
            updatedAt: true,
        }
    })
    return users
}

export const getById= async (id:number)=>{
    const user = await prisma.user.findUnique({
        where:{
            id:id
        },
        select:{//Define which datas must be returned to the frontend and which data must not
            id: true,
            name: true,
            email: true,
            password: false,
            phone: true,
            createdAt: true,
            updatedAt: true,
        }
    })
    return user
}

export const updateUser = async (id:number, data:User)=>{
    const user = await prisma.user.update({
        where:{
            id:id
        },
        data,
        select:{//Define which datas must be returned to the frontend and which data must not
            id: true,
            name: true,
            email: true,
            password: false,
            phone: true,
            createdAt: true,
            updatedAt: true,
        }
    })
    return user
}

export const deleteUser = async (id:number)=>{
    const user=await prisma.user.delete({
        where:{
            id:id
        },
        select:{//Define which datas must be returned to the frontend and which data must not
            id: true,
            name: true,
            email: true,
            password: false,
            phone: true,
            createdAt: true,
            updatedAt: true,
        }
    })
    return user
}
