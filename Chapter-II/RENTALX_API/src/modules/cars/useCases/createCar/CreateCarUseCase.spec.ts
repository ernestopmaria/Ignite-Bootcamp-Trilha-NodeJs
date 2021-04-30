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
    await createCarUseCase.execute(
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
  })
})