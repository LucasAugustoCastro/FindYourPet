import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import Users from '../models/User';
import authConfig from '../config/auth';

interface Request {
  email: string;
  password: string;
}
interface Response {
  user: Users;
  token: string;
}


class AuthenticateUserService {
  public async execute({email, password}: Request): Promise<Response> {
    
    const usersRepository = await getRepository(Users);

    const user = await usersRepository.findOne({
      where: { email },
    });

    if(!user) {
      throw new Error("Incorrect email/password combination.");
    }

    const passwordMatched = await compare(password, user.password);

    if(!passwordMatched){
      throw new Error("Incorrect email/password combination.");
    }

    if(!process.env.SECRETTOKEN){
      throw new Error("Undefined secret token");
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({  }, secret, {
      subject: user.id,
      expiresIn
    });

    return {
      user,
      token
    }



  }
}

export default AuthenticateUserService;