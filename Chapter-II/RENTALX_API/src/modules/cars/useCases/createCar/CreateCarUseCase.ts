import { inject, injectable } from "tsyringe";
import {ICarsRepository} from "../../repositories/ICarsRepository"

interface IResquest{
  name:string;
  description:string;
  daily_rate: number;
  license_plate:string;
  fine_amount: number;
  brand:string;
  category_id:string
}

@injectable()
class CreateCarUseCase{
  constructor(
    @inject("CarsRepository")
    private carsRepository:ICarsRepository
  ){}

  async execute({name,
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate}:IResquest):Promise<void>{


  }
}

export {CreateCarUseCase}