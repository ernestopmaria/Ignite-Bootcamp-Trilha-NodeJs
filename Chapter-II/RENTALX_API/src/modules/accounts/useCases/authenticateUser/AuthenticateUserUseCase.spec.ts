import { AppError } from "../../../../shared/errors/AppError";
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
  it("should be able to authenticate an nonexistent user",async ()=>{
    expect(async()=>{
      await authenticateUserUseCase.execute({
        email:"ernesto@gamil.com",
        password:"1234"
      });
    }).rejects.toBeInstanceOf(AppError)
    });
    it("should be able to authenticate with incorrect password",async ()=>{
      expect(async()=>{
        const user:ICreateUserDTO ={
          driver_license:"021158",
          email:"user@gmail.com",
          password:"1234",
          name:"User Test Error"
       } 
       await createUserUseCase.execute(user)

       await authenticateUserUseCase.execute({
         email:user.email,
         password:"incorrect password"
       })
      }).rejects.toBeInstanceOf(AppError)
      });

})