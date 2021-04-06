import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string
}


export async function ensureAuthenticated(request: Request,
    response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new Error("Token missing")
    }
    const [, token] = authHeader.split(" ")
    try {
        const { sub: user_id } = verify(token, "86e679041d7ad8bc167d96ef2540e054") as IPayload
        const userRepository = new UsersRepository()
        const user = await userRepository.findById(user_id)
        if (!user) {
            throw new Error("User does not exist")
        }
        next()
    } catch {
        throw new Error("invalid token")
    }

}