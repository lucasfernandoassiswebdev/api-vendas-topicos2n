import { Router } from "express"
import isAuthenticated from "../../../shared/middleware/isAuthenticated"
import AutomovelController from "../controllers/AutomovelController"

const automovelRouter = Router()

const automovelController = new AutomovelController()

automovelRouter.get('/', isAuthenticated, automovelController.index)
automovelRouter.get('/:id', isAuthenticated, automovelController.show)
automovelRouter.post('/', isAuthenticated, automovelController.create)
automovelRouter.put('/:id', isAuthenticated, automovelController.update)
automovelRouter.delete('/:id', isAuthenticated, automovelController.delete)

export default automovelRouter