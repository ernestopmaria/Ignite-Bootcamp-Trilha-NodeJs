import { Router } from 'express'
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';

import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';


const specificationsRoutes = Router();

const createSpecificationController = new CreateCategoryController()

specificationsRoutes.post("/", createSpecificationController.handle)


export { specificationsRoutes }