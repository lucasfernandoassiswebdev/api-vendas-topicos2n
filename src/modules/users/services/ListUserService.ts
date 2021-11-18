import { getCustomRepository } from 'typeorm'
import UserRepository from '../typeorm/repository/UserRepository'
import User from '../typeorm/entities/User'

class ListUserService {

    public async execute(): Promise<User[]> {
        let userRepository = getCustomRepository(UserRepository)
        const users = await userRepository.find()
        return users
    }
}

export default ListUserService