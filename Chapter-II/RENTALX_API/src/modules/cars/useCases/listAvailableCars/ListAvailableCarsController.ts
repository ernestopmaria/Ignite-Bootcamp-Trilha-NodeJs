import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";


class ListAvailableCarsController {
  async handle (request:Request, response:Response):Promise<Response>{
    const { brand, name, category_id} = request.query;
    const listAvailableCarsUseCase = container.resolve(ListAvailableCarsUseCase)

    const cars = await listAvailableCarsUseCase.execute({
      brand:brand as string,
      category_id: category_id as string,
      name: name as string
    })
    if(cars.length <=0){
      return response.json({message: "No cars found"})
    }
    return response.json(cars);
}
}

export {ListAvailableCarsController}