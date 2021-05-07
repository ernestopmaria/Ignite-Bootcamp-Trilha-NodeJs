import { AppError } from '../../../../shared/errors/AppError'
import { CarsRepositoryInMemory } from '../../repositories/in-memory/CarsRepositoryInMemory'
import {CreateCarUseCase} from './CreateCarUseCase'

let createCarUseCase :CreateCarUseCase
let carsRepositoryInMemory : CarsRepositoryInMemory
describe("Create a car", ()=>{

  beforeEach(()=>{
    carsRepositoryInMemory= new CarsRepositoryInMemory()
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory)
  })
  it("Should be able to create a new car", async()=>{
    const car = await createCarUseCase.execute(
      {
        name:"Cars",
        brand:"Brand",
        category_id:"1254782",
        daily_rate:10000,
        description: "vamos testar ",
        fine_amount:500,
        license_plate:"LD-73-91-GA"
      }
    )
    expect(car).toHaveProperty("id")
  })
  it("should not be able to create a car with exists license plate", ()=>{
    expect(async()=>{
      await createCarUseCase.execute(
        {
          name:"Cars1",
          brand:"Brand",
          category_id:"1254782",
          daily_rate:10000,
          description: "vamos testar ",
          fine_amount:500,
          license_plate:"LD-73-91-GA"
        }
      );
      await createCarUseCase.execute(
        {
          name:"Cars2",
          brand:"Brand",
          category_id:"1254782",
          daily_rate:10000,
          description: "vamos testar ",
          fine_amount:500,
          license_plate:"LD-73-91-GA"
        }
      );
    }).rejects.toBeInstanceOf(AppError)
  })

  it("should not be able to create a car with available true by default", async()=>{
    const car = await createCarUseCase.execute(
      {
        name:"Car Available",
        brand:"Brand",
        category_id:"1254782",
        daily_rate:10000,
        description: "vamos testar ",
        fine_amount:500,
        license_plate:"LD-73-91-GA"
      }
      
    );
    expect(car.available).toBe(true)
    
  })
})