import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Automovel from "../typeorm/entities/Automovel";
import AutomovelRepository from "../typeorm/repositories/AutomovelRepository";

interface IRequest {
    id: string;
    ano: number;
    modelo: string;
    marca: string;
}
class UpdateAutomovelService {
    
    public async execute({id, ano, modelo, marca}: IRequest): Promise<Automovel>{
        const automovelRepository = getCustomRepository(AutomovelRepository)
        const automovelExist = await automovelRepository.findOne(id)

        if (!automovelExist){
            throw new AppError(`Automóvel não existe`, 400)
        }

        const automovel = await automovelRepository.findByAnoModeloMarca(ano, modelo, marca)
        if (automovel){
            throw new AppError(`Já existe um automóvel com este ano, modelo e marca`, 400)
        }

        automovelExist.ano = ano
        automovelExist.modelo = modelo
        automovelExist.marca = marca
        
        await automovelRepository.save(automovelExist) 

        return automovelExist
    }
}

export default UpdateAutomovelService
