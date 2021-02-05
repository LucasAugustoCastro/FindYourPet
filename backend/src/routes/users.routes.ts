import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

interface User{
  name: string; 
  email: string; 
  userName: string; 
  password?: string; 
  state: string; 
  city: string; 
  neighborhood: string;
}

usersRouter.post('/', async (request, response) => {
  try{
    const { 
      name, 
      email, 
      userName, 
      password, 
      state, 
      city, 
      neighborhood,
     } = request.body;

    const createUser = new CreateUserService();

    const user:User = await createUser.execute({
      name, 
      email, 
      userName, 
      password, 
      state, 
      city, 
      neighborhood
    });

    delete user.password;

    return  response.status(200).json(user)
  } catch (err) {
    return response.status(400).json({error: err.message})
  }
});

export default usersRouter;