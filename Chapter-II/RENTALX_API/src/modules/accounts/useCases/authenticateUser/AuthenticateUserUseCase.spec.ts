import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"


let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;
describe("Authenticate User", ()=>{
  beforeEach(()=>{
    usersRepositoryInMemory = new UsersRepositoryInMemory()
    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory)
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory)
  });
  it("should be able to authenticate ab user",async ()=>{
    const user:ICreateUserDTO ={
      driver_license:"021158",
      email:"user@gmail.com",
      password:"1234",
      name:"User Test"
    };
    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email:user.email,
     password:user.password});

     expect(result).toHaveProperty("token")
  });


})