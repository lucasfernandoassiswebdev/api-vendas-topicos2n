import { getCustomRepository } from "typeorm";
import Automovel from "../typeorm/entities/Automovel";
import AutomovelRepository from "../typeorm/repositories/AutomovelRepository";

class ListAutomovelService {

    public async execute(): Promise<Automovel[]> {
        const automovelRepository = getCustomRepository(AutomovelRepository)
        const automoveis = await automovelRepository.find()
        return automoveis
    }
}

export default ListAutomovelService
