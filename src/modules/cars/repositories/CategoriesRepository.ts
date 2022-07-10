import { Category } from "../model/Category";


class CategoriesRespositories{

    private categories: Category[];

    constructor(){
        this.categories = []
    }


    create({name, description}:ICreateCategoryDTO): void {

        const category = new Category();

        Object.assign(category, {name, description});    

        this.categories.push(category)

    }

    list(): Category[]{
        return this.categories;
    }

    findByName(name: string): Category {
        return this.categories.find(category => category.name === name);
    }

}

export { CategoriesRespositories}