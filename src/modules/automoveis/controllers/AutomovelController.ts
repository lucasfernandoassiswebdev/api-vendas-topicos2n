import { Request, Response } from "express"
import CreateAutomovelService from "../services/CreateAutomovelService";
import DeleteAutomovelService from "../services/DeleteAutomovelService";
import ListAutomovelService from "../services/ListAutomovelService";
import ShowAutomovelService from "../services/ShowAutomovelService";
import UpdateAutomovelService from "../services/UpdateAutomovelService";

export default class AutomovelController {

    public async index(request: Request, response: Response): Promise<Response> {
        const listAutomoveis = new ListAutomovelService()
        const automoveis = await listAutomoveis.execute()
        return response.json(automoveis)
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const showAutomovel = new ShowAutomovelService()
        const automovel = await showAutomovel.execute(id)
        return response.json(automovel)
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const { ano, modelo, marca } = request.body
        const createAutomovel = new CreateAutomovelService()
        const automovel = createAutomovel.execute({
            ano,
            modelo,
            marca
        })
        return response.json(automovel)
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { ano, modelo, marca } = request.body
        const updateAutomovel = new UpdateAutomovelService()
        const automovel = updateAutomovel.execute({
            id,
            ano,
            modelo,
            marca
        })
        return response.json(automovel)
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const deleteAutomovel = new DeleteAutomovelService()
        await deleteAutomovel.execute(id)
        return response.status(204).send()
    }
}