import { Router } from 'express'
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController'
import { UpdateUserAvataController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController'

const userRoutes = Router()


const createUserController = new CreateUserController()
const updateUserAvatarController = new UpdateUserAvataController()


userRoutes.post("/", createUserController.handle)
userRoutes.patch("/avatar", updateUserAvatarController.handle)

export { userRoutes }

