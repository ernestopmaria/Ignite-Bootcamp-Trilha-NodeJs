import { getRepository, Repository } from "typeorm";
import { IRentalsRepository } from "../../repositories/IRentalsRepository";
import { ICreateRentalDTO } from "../dtos/ICreateRentalDTO";
import { Rental } from "../typeorm/entities/Rental";


class RentalsRepository implements IRentalsRepository{
  private repository: Repository<Rental>
  constructor(){
    this.repository = getRepository(Rental)
  }
  async findOpenRentalByCar(car_id: string): Promise<Rental> {
   const OpenByCar= await this.repository.findOne(car_id)
   return OpenByCar
   
  }
  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    const OpenByUser= await this.repository.findOne(user_id)
    return OpenByUser
   
  }
  async create({ car_id, expected_return_date, user_id }: ICreateRentalDTO): Promise<Rental> {
    const rental = this.repository.create({
      car_id,
       expected_return_date,
        user_id 
    })
    await this.repository.save(rental)
    return rental;
  }

}

export {RentalsRepository}