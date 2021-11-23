import { getCustomRepository } from "typeorm"
import AppError from "../../../shared/errors/AppError"
import Product from "../typeorm/entities/Automovel"
import AutomovelRepository from "../typeorm/repositories/AutomovelRepository"

class ShowAutomovelService {

    public async execute(id: string): Promise<Product> {
        const automovelRepository = getCustomRepository(AutomovelRepository)
        const automovel = await automovelRepository.findOne(id)

        if (!automovel) {
            throw new AppError(`Automóvel não existe`, 404)
        }

        return automovel
    }
}

export default ShowAutomovelService
