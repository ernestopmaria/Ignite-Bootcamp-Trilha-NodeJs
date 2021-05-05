import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory"
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase"

let listAvailableCarsUseCase :ListAvailableCarsUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory
describe("List Cars", ()=>{
  beforeEach(()=> {
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory)
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
    const cars = await listAvailableCarsUseCase.execute({}) 
    expect(cars).toEqual([car])
  })
  it("should be able to list all available cars by brand", async ()=>{
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
    const cars = await listAvailableCarsUseCase.execute({
      brand:"Car_Brand",
    })
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
        license_plate:"LD-75-92-HR",
        name:"Car_Name"
        }
    )
    const cars = await listAvailableCarsUseCase.execute({
      name:"Car_Name",
    })
        expect(cars).toEqual([car])

  })
  it("should be able to list all available cars by category", async ()=>{
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
    const cars = await listAvailableCarsUseCase.execute({
      category_id:"category_id",
    })
        expect(cars).toEqual([car])

  })
})  