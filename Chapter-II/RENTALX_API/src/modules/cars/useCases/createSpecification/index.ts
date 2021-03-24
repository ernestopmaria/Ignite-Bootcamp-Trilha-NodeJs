import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateCategoryController } from "../createCategory/CreateCategoryController";
import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";


const specificationRepository = new SpecificationsRepository()
const createSpecificationUseCase = new CreateCategoryUseCase(specificationRepository);
const createSpecificationController = new CreateCategoryController(createSpecificationUseCase)

export { createSpecificationController }