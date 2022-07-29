import {Router} from 'express';
import { CategoriesRespositories } from '../modules/cars/repositories/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { CreateCategoryUseCase } from '../modules/cars/useCases/createCategory/CreateCategoryUseCase';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRespositories();


categoriesRoutes.post('/', (req, res) => {
     return createCategoryController
})


categoriesRoutes.get('/', (req, res) => {
      const categories = categoriesRepository.list();

      return res.status(200).json(categories);
})

export {categoriesRoutes}