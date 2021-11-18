import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppError'
import UserRepository from '../typeorm/repository/UserRepository'
import User from '../typeorm/entities/User'

import { hash } from 'bcryptjs'

// cria um tipo de dado
interface IRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {

    public async execute({ name, email, password }: IRequest): Promise<User> {
        let userRepository = getCustomRepository(UserRepository)
        let emailExist = await userRepository.findByEmail(email)
        if (emailExist) {
            throw new AppError('Email já existente', 400)
        }
        // email não existe
        // senha do usuário precisa ser criptografada para inserção no banco de dados
        let senhaCripto = await hash(password, 8)

        // cria o usuário em memória
        const novoUsuario = userRepository.create({ name, email, password: senhaCripto })

        // salva no banco
        await userRepository.save(novoUsuario);
        return novoUsuario
    }
}

export default CreateUserService