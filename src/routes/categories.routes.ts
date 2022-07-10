import {Router} from 'express';
import { CategoriesRespositories } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRespositories();


categoriesRoutes.post('/', (req, res) => {
     const {name, description} = req.body;

     const createCategoryService = new CreateCategoryService(categoriesRepository);

     createCategoryService.execute({name, description});
    

     return res.status(201).send();
})


categoriesRoutes.get('/', (req, res) => {
      const categories = categoriesRepository.list();

      return res.status(200).json(categories);
})

export {categoriesRoutes}