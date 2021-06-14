import { AppError } from "../../../../shared/errors/AppError";
import { RentalsRepositoryInMemory } from "../../repositories/in-memory/RentalsRepositoryInMemory";
import { CarsRepositoryInMemory } from "../../../cars/repositories/in-memory/CarsRepositoryInMemory";
import { CreateRentalUseCase } from "./CreateRentalUseCase";
import dayjs from 'dayjs'
import { DayjsDateProvider } from "../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";



let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory:RentalsRepositoryInMemory;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let dayjsDateProvider :DayjsDateProvider;


describe("Create Rental", ()=>{
  const dayAdd24Hours = dayjs().add(1,"day").toDate();
  beforeEach(()=>{
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    dayjsDateProvider = new DayjsDateProvider();
   
    createRentalUseCase= new CreateRentalUseCase(rentalsRepositoryInMemory, dayjsDateProvider,carsRepositoryInMemory);
  })

    it("should be able to create a new rental", async()=>{

      const car = await carsRepositoryInMemory.create({
        name:"Test",
        description:"Car test",
        daily_rate:100,
        license_plate:"test",
        brand:"Patrol",
        category_id:"1225",
        fine_amount:40
    
      })
      const rental = await createRentalUseCase.execute({
        user_id:"12345",
        car_id:car.id,
        expected_return_date: dayAdd24Hours
      })
      expect(rental).toHaveProperty("id")
      expect(rental).toHaveProperty("start_date")
})

it("should be able to create a new rental if there is another open to the same user", async()=>{
await rentalsRepositoryInMemory.create({
   car_id:"11111",
   user_id:"12345",
   expected_return_date:dayAdd24Hours
  })
expect( createRentalUseCase.execute({
    user_id:"12345",
    car_id:"121212",
    expected_return_date: dayAdd24Hours
  })
).rejects.toEqual(new AppError("There´s a rental in progress for user"))
})

it("should be able to create a new rental if there is another open to the same car", async()=>{
  await rentalsRepositoryInMemory.create({
    car_id:"teste",
   user_id:"12345",
   expected_return_date:dayAdd24Hours
  })
  expect( createRentalUseCase.execute({
      user_id:"121",
      car_id:"teste",
      expected_return_date: dayAdd24Hours
    })
  ).rejects.toEqual(new AppError ("Car is unavailable"))
  })
  it("should be able to create a new rental with invalid return time", async()=>{
   await expect( createRentalUseCase.execute({
        user_id:"123",
        car_id:"teste",
        expected_return_date: dayjs().toDate(),
      })
    ).rejects.toEqual(new AppError ("Invalid return time!"))
    })
})