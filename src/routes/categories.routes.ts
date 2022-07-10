import {Router} from 'express';
import { CategoriesRespositories } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRespositories();

categoriesRoutes.post('/', (req, res) => {
     const {name, description} = req.body;

     categoriesRepository.create({name, description});

     return res.status(201).send();
})


export {categoriesRoutes}