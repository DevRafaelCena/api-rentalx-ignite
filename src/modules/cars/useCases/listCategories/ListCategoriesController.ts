import { Request, Response } from 'express';
import { ListCategoriesUseCase } from '../listCategories/ListCategoriesUseCase';

class ListCategoryController {

    constructor(private listCategoryUseCase: ListCategoriesUseCase){}

    handle(request: Request, response: Response): Response {

        const all = this.listCategoryUseCase.execute();

        return response.status(200).json(all);
        
    }


}

export { ListCategoryController}