import { inject, injectable } from "tsyringe";
import { hash } from 'bcrypt'
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {

}

@injectable()
class CreateUserUseCase {

    constructor
        (

            @inject("UsersRepository")
            private userRepositoy: IUsersRepository) { }

    async execute({ name, email, password, driver_license }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.userRepositoy.findByEmail(email)
        if (userAlreadyExists) {
            throw new Error("User already exists")

        }
        const passwordHash = await hash(password, 8)
        await this.userRepositoy.create({ name, email, password: passwordHash, driver_license })
        return
    }

}

export { CreateUserUseCase }