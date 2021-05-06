import { getRepository, Repository } from "typeorm";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../../../repositories/ISpecificationsRepository";
import { Specification } from "../entities/Specification";


class SpecificationsRepository implements ISpecificationsRepository {

    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }
    findByIds(ids: string[]): Promise<Specification[]> {
        throw new Error("Method not implemented.");
    }

    async create({ name, description }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = this.repository.create({
            name,
            description,
        })

  await this.repository.save(specification)
        return specification
    }

    async findByName(name: string): Promise<Specification> {

        return await this.repository.findOne({ name });
    }


}

export { SpecificationsRepository }