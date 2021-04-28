import { Router } from 'express'


import { AuthenticateUserController } from '../../../../modules/accounts/useCases/authenticateUser/AuthenticateUserController'


const authenticationRoutes = Router()
const authenticate = new AuthenticateUserController()

authenticationRoutes.post("/", authenticate.handle)

export { authenticationRoutes }