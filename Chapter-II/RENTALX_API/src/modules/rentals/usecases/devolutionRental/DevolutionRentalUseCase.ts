import { inject } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICarsRepository } from "../../../cars/repositories/ICarsRepository";
import { IRentalsRepository } from "../../repositories/IRentalsRepository";


interface IRequest {
  id:string;
  user_id:string
}

class DevolutionRentalUsecase{
  constructor(
    @inject("RentalsRepository")
    private rentalsRepository: IRentalsRepository,
    @inject("CarsRepository")
    private carsRepository:ICarsRepository
    ){}

    async execute({id, user_id}:IRequest){
      const rental = await this.rentalsRepository.findById(id)

      if(!rental){
        throw new AppError("Rental does not exists")
      }

    }

}

export {DevolutionRentalUsecase}