import { CategoriesRepository } from "../../repositories/implementations/CategoriesRespository";
import { ListCategoryController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoryController = new ListCategoryController(listCategoriesUseCase);


export { listCategoryController };