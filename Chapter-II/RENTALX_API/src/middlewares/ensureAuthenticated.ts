import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string
}
interface IRequest{
    request:Request
}


export async function ensureAuthenticated(request: Request,
    response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new AppError("Token missing", 401)
    }
    const [, token] = authHeader.split(" ")
    try {
        const { sub: user_id } = verify(token, "86e679041d7ad8bc167d96ef2540e054") as IPayload
        const userRepository = new UsersRepository()
        const user = await userRepository.findById(user_id)
        if (!user) {
            throw new AppError("User does not exist", 401)
        }
        const user ={
            id:user_id
        }:IRequest
        next()
    } catch {
        throw new AppError("invalid token", 401)
    }

}