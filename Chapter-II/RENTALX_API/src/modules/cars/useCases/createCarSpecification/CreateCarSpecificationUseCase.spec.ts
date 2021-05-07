import { AppError } from "../../../../shared/errors/AppError"
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory"
import { SpecificationRepositoryInMemory } from "../../repositories/in-memory/SpecificationRepositoryInMemory"
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase"

let carsRepositoryInMemory: CarsRepositoryInMemory
let createCarSpecificationUseCase :CreateCarSpecificationUseCase
let specificationsRepositoryInMemory: SpecificationRepositoryInMemory

describe("Create car specification", ()=>{
  beforeEach(()=>{
    carsRepositoryInMemory= new CarsRepositoryInMemory
    specificationsRepositoryInMemory = new SpecificationRepositoryInMemory
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(carsRepositoryInMemory,specificationsRepositoryInMemory)

  })
  it("should be able to add a new specification to a non-existent car", async()=>{
    expect(async()=>{
    const car_id ="1234";
    const specifications_id=["54321"]
    await createCarSpecificationUseCase.execute({specifications_id,car_id})
  }).rejects.toBeInstanceOf(AppError)

  })
  it("should be able to add a new specification to the car", async()=>{

    const car = await carsRepositoryInMemory.create({
      name:"Cars1",
      brand:"Brand",
      category_id:"1254782",
      daily_rate:10000,
      description: "vamos testar ",
      fine_amount:500,
      license_plate:"LD-73-91-GA"
    })
    const specification = await specificationsRepositoryInMemory.create({
      description:"test",
      name:"test"
    })

    const specifications_id=[specification.id]
   const specificationsCars = await createCarSpecificationUseCase.execute({
      specifications_id,
      car_id:car.id})

      expect(specificationsCars).toHaveProperty("specifications")
      expect(specificationsCars.specifications.length).toBe(1)
  });


})