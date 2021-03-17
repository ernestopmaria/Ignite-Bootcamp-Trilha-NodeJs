import { Request, Response } from "express"
import CreateCoursesServices from "./CreateCoursesServices";

export function CreateCourse(request: Request, response: Response) {
    CreateCoursesServices.execute({ duration: 10, educator: "Ernesto", name: "NodeJs" })

    return response.send()
}