import { Router } from 'express';

const petRouter = Router();

petRouter.post('/', (request, response)=> {
    try{
        const {} = request.body;

        return response.status(200).json({message: 'tamo ai'})

    }catch(err){
        return response.status(400).json({error: err.message})
    }
});

export default petRouter;