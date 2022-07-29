import { CategoriesRepository } from "../../repositories/implementations/CategoriesRespository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const createcategoryUseCase = new CreateCategoryUseCase(categoriesRepository);


const createCategoryController = new CreateCategoryController(createcategoryUseCase);

export { createCategoryController };