import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import AutomovelRepository from "../typeorm/repositories/AutomovelRepository";

class DeleteAutomovelService {

    public async execute(id: string): Promise<void> {
        const automovelRepository = getCustomRepository(AutomovelRepository)
        const automovelExist = await automovelRepository.findOne(id)

        if (!automovelExist){
            throw new AppError(`Automóvel não existe `, 400)
        }

        await automovelRepository.remove(automovelExist)
    }
}

export default DeleteAutomovelService
