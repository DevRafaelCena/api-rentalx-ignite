import { CategoriesRepository } from "../../repositories/implementations/CategoriesRespository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default () => {
    const categoriesRepository = new CategoriesRepository();
    const createcategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
    
    
    const createCategoryController = new CreateCategoryController(createcategoryUseCase);

    return createCategoryController
}
