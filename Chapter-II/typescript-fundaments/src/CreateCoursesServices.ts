interface Course {
    name: string,
    duration: number,
    educator: string
}

class CreateCoursesServices {
    execute({ name, duration, educator }: Course) {
        console.log(duration, name, educator)
    }

}

export default new CreateCoursesServices()