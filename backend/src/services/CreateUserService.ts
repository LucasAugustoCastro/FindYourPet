import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import Users from '../models/User';

interface Request {
  name: string;
  email: string;
  userName: string;
  password: string;
  state: string;
  city: string;
  neighborhood: string;
}


class CreateUserService {
  public async execute({name, email, userName, password, state, city, neighborhood}: Request): Promise<Users> {
    console.log('teste');
    
    const usersRepository = getRepository(Users);
    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if(checkUserExists) {
      throw new Error('Email address already used');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name, 
      email,
      password: hashedPassword,
      userName,
      state,
      city,
      neighborhood
    });

    await usersRepository.save(user);

    return user;


  }
}

export default CreateUserService;