import { CategoriesRespositories } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = new CategoriesRespositories();
const createcategoryUseCase = new CreateCategoryUseCase(categoriesRepository);


const createCategoryController = new CreateCategoryController(createcategoryUseCase);

export { createCategoryController };