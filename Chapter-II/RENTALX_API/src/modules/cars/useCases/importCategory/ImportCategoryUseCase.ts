import fs from "fs"
import csvParser from "csv-parse"

class ImportCategoryUseCase {
    execute(file: Express.Multer.File): void {

        const stream = fs.createReadStream(file.path);

        const parseFile = csvParser()
        stream.pipe(parseFile)
    }
}

export { ImportCategoryUseCase }