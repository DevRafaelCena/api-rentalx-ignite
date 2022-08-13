import { CategoriesRepository } from "../../repositories/implementations/CategoriesRespository";
import { ListCategoryController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";


export default () => {
    const categoriesRepository = null;
    const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
    const listCategoryController = new ListCategoryController(listCategoriesUseCase);

    return listCategoryController;

}