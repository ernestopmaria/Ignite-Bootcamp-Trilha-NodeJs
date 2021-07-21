import { DayjsDateProvider } from "../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider"
import { MailProviderInMemory } from "../../../../shared/container/providers/MailProvider/in-memory/MailProviderInMemory"
import { AppError } from "../../../../shared/errors/AppError"
import { UsersRepositoryInMemory } from "../../infra/repositories/in-memory/UsersRepositoryInMemory"
import { UsersTokensRepositoryInMemory } from "../../infra/repositories/in-memory/UsersTokensRepositoryInMemory"
import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase"

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase
let usersRepositoryInMemory: UsersRepositoryInMemory
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory
let dateProvider : DayjsDateProvider
let mailProvider: MailProviderInMemory

describe("Send forgot mail", ()=>{
    beforeEach(()=>{
        usersRepositoryInMemory= new UsersRepositoryInMemory()
        usersTokensRepositoryInMemory= new UsersTokensRepositoryInMemory()
        dateProvider =new DayjsDateProvider()
        mailProvider= new  MailProviderInMemory()

        sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
            usersRepositoryInMemory,usersTokensRepositoryInMemory,
            dateProvider,mailProvider)


    })
   
    
    it("should be able to send a forgot password mail to user", async ()=>{

       const sendMail= spyOn(mailProvider,"sendMail")
        await usersRepositoryInMemory.create({
            driver_license:"4548",
            email:"ernesto@gamisl.com",
            name:"ernesto",
            password:"1234",
        });

        await sendForgotPasswordMailUseCase.execute("ernesto@gamisl.com")
        expect(sendMail).toHaveBeenCalled()
    });

    it("should not be able to send a forgot password mail if user does not exists",async ()=>{
        await expect(sendForgotPasswordMailUseCase.execute("ka@gmail.com")
        ).rejects.toEqual(new AppError("User does not exists!"))
    });

    it("should be able to create an users token",async ()=>{
        const generateTokenMail =spyOn(usersTokensRepositoryInMemory, "create");
        await usersRepositoryInMemory.create({
            driver_license:"4548",
            email:"ernesto93@gamisl.com",
            name:"ernesto maria",
            password:"1234",
        });

        await sendForgotPasswordMailUseCase.execute("ernesto93@gamisl.com")

        expect(generateTokenMail).toBeCalled()
    })
})