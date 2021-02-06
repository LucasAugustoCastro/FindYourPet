import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

interface Resp{
  user : {
    name: string; 
    email: string; 
    userName: string; 
    password?: string; 
    state: string; 
    city: string; 
    neighborhood: string;
  };
  token: string;
}

sessionsRouter.post('/', async (request, response) => {
  try{
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const { user, token }: Resp = await authenticateUser.execute({
      email,
      password
    })

    delete user.password;

    return  response.status(200).json({ user, token })
  } catch (err) {
    return response.status(400).json({error: err.message})
  }
});

export default sessionsRouter;