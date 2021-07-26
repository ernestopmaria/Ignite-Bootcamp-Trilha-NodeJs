import { Router } from 'express'
import multer from 'multer'
import uploadConfig from '../../../../config/upload'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { CreateUserController } from '../../../../modules/accounts/useCases/createUser/CreateUserController'
import { UpdateUserAvataController } from '../../../../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController'
import { ProfileUserController } from '../../../../modules/accounts/useCases/profileUser/profileUserController'

const userRoutes = Router()

const uploadAvatar = multer(uploadConfig)

const createUserController = new CreateUserController()
const profileUserController = new ProfileUserController()
const updateUserAvatarController = new UpdateUserAvataController()


userRoutes.post("/", createUserController.handle)
userRoutes.patch("/avatar", ensureAuthenticated, uploadAvatar.single("avatar"),updateUserAvatarController.handle)
userRoutes.get("/profile", ensureAuthenticated, profileUserController.handle)

export { userRoutes }

