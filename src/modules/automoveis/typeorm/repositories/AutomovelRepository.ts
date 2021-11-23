import { EntityRepository, Repository } from "typeorm";
import Automovel from "../entities/Automovel";

@EntityRepository(Automovel)
class AutomovelRepository extends Repository<Automovel> {

    public async findByAnoModeloMarca(ano: number, modelo: string, marca: string): Promise<Automovel | undefined> {
        let automovel = this.findOne({
            where: {
                ano, modelo, marca
            }
        })
        return automovel
    }
}

export default AutomovelRepository