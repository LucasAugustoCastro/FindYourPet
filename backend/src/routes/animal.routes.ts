import { Router } from 'express';
import { getRepository } from 'typeorm';
import Animals from '../models/Animal';
const animalRouter = Router();

animalRouter.get('/', async (_, response) => {
    const animalRepository = getRepository(Animals);
    const allAnimals = await animalRepository.find(); 
    return response.status(200).json(allAnimals);
});

animalRouter.post('/', async (request, response)=> {
    try{
        const { name } = request.body;

        const animalRepository = getRepository(Animals);

        const checkColorExist = await animalRepository.findOne({where: {name: name}});
        if(checkColorExist){
            throw new Error('Animal alredy exists');
        }
        const animal = animalRepository.create({
            name,
        })
        await animalRepository.save(animal);
        return response.status(200).json(animal);

    }catch(err){
        return response.status(400).json({error: err.message})
    }
});

export default animalRouter;