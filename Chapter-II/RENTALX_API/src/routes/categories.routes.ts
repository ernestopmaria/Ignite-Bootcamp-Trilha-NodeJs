import { Router } from 'express'
import multer from 'multer'
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { importCategoryController } from '../modules/cars/useCases/importCategory';
import { ListCategoryController } from '../modules/cars/useCases/listCategory/ListCategoryController';


const createCategoryController = new CreateCategoryController()
const listCategoryController = new ListCategoryController()
const categoriesRoutes = Router();
const upload = multer({
    dest: "./tmp"
})



categoriesRoutes.post("/", createCategoryController.handle);


categoriesRoutes.get("/", listCategoryController.handle)

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {

    return importCategoryController.handle(request, response)

})



export { categoriesRoutes }