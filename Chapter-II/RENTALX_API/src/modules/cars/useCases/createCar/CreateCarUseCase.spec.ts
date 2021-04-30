import {CreateCarUseCase} from './CreateCarUseCase'

let createCarUseCase :CreateCarUseCase
describe("Create a car", ()=>{

  beforeEach(()=>{
    createCarUseCase = new CreateCarUseCase()
  })
  it("Should be able to create a new car", async()=>{
    await createCarUseCase.execute()
  })
})