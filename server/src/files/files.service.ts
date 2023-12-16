import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as fs from 'fs'
import * as path from 'path'
import * as uuid from 'uuid'

@Injectable()
export class FilesService {
    async createFiles(files: any[]): Promise<string[]>{
        try {
            if (!files.length) return []
            let fileNames: string[] = [];
            const filePath = path.resolve(__dirname, "..", 'static')
            if(!fs.existsSync(filePath)){
                fs.mkdirSync(filePath, {recursive: true})
            }
            files.forEach((file, i) => {
                const array = file.originalname.split('.');
                const expansion = array[array.length - 1]

                const fileName = uuid.v4() + i + `.${expansion}`;
                fileNames.push(fileName)
                fs.writeFileSync(path.join(filePath, fileName), file.buffer)
            })
            return fileNames
        } catch (e){
            throw new HttpException("Произошла ошибка при записи файла", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

}
