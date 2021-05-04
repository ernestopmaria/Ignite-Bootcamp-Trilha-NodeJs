import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory"
import { ListCarsUseCase } from "./ListCarsUseCase"

let listCarsUseCase :ListCarsUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory
describe("List Cars", ()=>{
  beforeEach(()=> {
    carsRepositoryInMemory = new CarsRepositoryInMemory()
     listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory)
  })
  it("should be able to list all available cars", async()=>{
    const car =await carsRepositoryInMemory.create(
      {   
        brand:"Car",
        category_id:"category_id",
        daily_rate:140.00,
        description:"Car description",
        fine_amount:50,
        license_plate:"LD-75-91-HA",
        name:"Car1"
        }
    )
    const cars = await listCarsUseCase.execute({}) 
    expect(cars).toEqual([car])
  })
  it("should be able to list all available cars by name", async ()=>{
    const car =await carsRepositoryInMemory.create(
      {   
        brand:"Car",
        category_id:"category_id",
        daily_rate:140.00,
        description:"Car description",
        fine_amount:50,
        license_plate:"LD-75-91-HR",
        name:"Car_Brand"
        }
    )
    const cars = await listCarsUseCase.execute({
      brand:"Car_Brand",
    })
    console.log(cars)
    expect(cars).toEqual([car])

  })
})  