import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Automovel from "../typeorm/entities/Automovel";
import AutomovelRepository from "../typeorm/repositories/AutomovelRepository";

interface IRequest {
    ano: number;
    modelo: string;
    marca: string;
}

class CreateAutomovelService {
    public async execute({ ano, modelo, marca }: IRequest): Promise<Automovel> {
        const automovelRepository = getCustomRepository(AutomovelRepository)
        const automovelExists = await automovelRepository.findByAnoModeloMarca(ano, modelo, marca)
        if (automovelExists) {
            throw new AppError(`Já existe um automóvel com este ano, modelo e marca cadastrado`, 400)
        }
        const automovel = automovelRepository.create({
            ano, modelo, marca
        })

        await automovelRepository.save(automovel)

        return automovel
    }
}

export default CreateAutomovelService
