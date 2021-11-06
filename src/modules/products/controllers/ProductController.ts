import { Request, Response } from "express"
import CreateProductService from "../services/CreateProductService";
import DeleteProductService from "../services/DeleteProductService";
import ListProductService from "../services/ListProductService";
import ShowProductService from "../services/ShowProductService";
import UpdateProductService from "../services/UpdateProductService";

export default class ProductController {

    public async index(request: Request, response: Response): Promise<Response> {
        const listProduct = new ListProductService()
        const products = await listProduct.execute()
        return response.json(products)
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const showProduct = new ShowProductService()
        const product = await showProduct.execute(id)
        return response.json(product)
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const { name, quantity, price } = request.body
        const createProduct = new CreateProductService()
        const product = createProduct.execute({
            name,
            quantity,
            price
        })
        return response.json(product)
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { name, quantity, price } = request.body
        const updateProduct = new UpdateProductService()
        const product = updateProduct.execute({
            id,
            name,
            quantity,
            price
        })
        return response.json(product)
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const deleteProduct = new DeleteProductService()
        await deleteProduct.execute(id)
        return response.status(204).send()
    }
}