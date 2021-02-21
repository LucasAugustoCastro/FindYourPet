import { Router } from 'express';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import petsRouter from './pets.routes';
import colorRouter from './colorAnimal.routes';
import animalRouter from './animal.routes';

const routes = Router();

routes.use('/signup', usersRouter);
routes.use('/login', sessionsRouter);
routes.use('/pet', petsRouter);
routes.use('/colorAnimal', colorRouter);
routes.use('/animal', animalRouter);

export default routes;