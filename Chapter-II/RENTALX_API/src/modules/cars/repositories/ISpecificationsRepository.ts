import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {

    findByName(name: string): Promise<Specification>
    create({ name, description }: ICreateSpecificationDTO): void


}

export { ISpecificationsRepository, ICreateSpecificationDTO }