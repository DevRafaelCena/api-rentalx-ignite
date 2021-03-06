import { Specification } from "../model/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "./ISpecificationsRepository";


class SpecificationRepository implements ISpecificationsRepository {

    private specifications: Specification[]

    constructor() {
        this.specifications = []
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find(specification => specification.name === name);

        return specification;
    }


    create({ description, name }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, { description, name }); 

        this.specifications.push(specification)
    }
    
}

export { SpecificationRepository };