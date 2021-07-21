import { DayjsDateProvider } from "../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../../infra/repositories/in-memory/UsersRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "../../infra/repositories/in-memory/UsersTokensRepositoryInMemory";

import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"
let authenticateUserUseCase: AuthenticateUserUseCase;
let usersTokensRepositoryInMemory:UsersTokensRepositoryInMemory ;
let dateProvider: DayjsDateProvider
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;
describe("Authenticate User", ()=>{
  beforeEach(()=>{
    usersRepositoryInMemory = new UsersRepositoryInMemory()
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory()
    dateProvider = new DayjsDateProvider()
    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory,usersTokensRepositoryInMemory, dateProvider)
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
  it("should be able to authenticate an nonexistent user",async ()=>{
    await expect( 
      authenticateUserUseCase.execute({
        email:"ernesto@gamil.com",
        password:"1234"
      })
    ).rejects.toEqual(new AppError("Email or password incorrect!"))
    });
    it("should be able to authenticate with incorrect password",async ()=>{
      const user:ICreateUserDTO ={
        driver_license:"021158",
        email:"user@gmail.com",
        password:"1234",
        name:"User Test Error",
     } 
     await createUserUseCase.execute(user)
    await  expect(
       authenticateUserUseCase.execute({
         email:user.email,
         password:"incorrect password"
       })
      ).rejects.toEqual(new AppError("Email or password incorrect!") )
      });
})