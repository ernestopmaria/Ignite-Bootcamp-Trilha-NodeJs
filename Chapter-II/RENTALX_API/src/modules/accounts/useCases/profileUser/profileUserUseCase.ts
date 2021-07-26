import { inject, injectable } from "tsyringe";
import { IUserResponseDTO } from "../../dtos/IUserResponseDTO";
import { IUsersRepository } from "../../infra/repositories/IUsersRepository";
import { User } from "../../infra/typeorm/entities/Users";
import { UserMap } from "../../mapper/UserMap";



@injectable()
class ProfileUserUseCase{
    
    constructor(
    @inject("UsersRepository")
    private userRepository:IUsersRepository
    ){}

    async execute(id:string):Promise<IUserResponseDTO>{
        const user = await this.userRepository.findById(id)

        return UserMap.toDTO(user)
    

    }

}

export{ProfileUserUseCase}