import {response, Router} from 'express';
import { CreateCategoryController} from '../modules/cars/useCases/createCategory/CreateCategoryController';
import  listCategoryController  from '../modules/cars/useCases/listCategories';
import multer from 'multer';
import { importCategoryController } from '../modules/cars/useCases/importCategory';


const categoriesRoutes = Router();

const upload = multer({ dest: './tmp' });

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post('/', createCategoryController.handle)


categoriesRoutes.get('/', (req, res) => {
      return listCategoryController().handle(req, res);
})

categoriesRoutes.post('/import', upload.single('file'), (req, res) => {

    return importCategoryController.handle(req, res);

})

export {categoriesRoutes}