import { request, Router } from 'express';
import { getRepository } from 'typeorm';
import Colors from '../models/Color';
const colorAnimalRouter = Router();

colorAnimalRouter.get('/', async (request, response) => {
    const colorRepository = getRepository(Colors);
    const allColors = await colorRepository.find();
    return response.status(200).json(allColors);
});

colorAnimalRouter.post('/', async (request, response)=> {
    try{
        const { name } = request.body;

        const colorRepository = getRepository(Colors);

        const checkColorExist = await colorRepository.findOne({where: {name: name}});
        if(checkColorExist){
            throw new Error('Color alredy exists');
        }
        const color = colorRepository.create({
            name,
        })
        await colorRepository.save(color);
        return response.status(200).json(color);

    }catch(err){
        return response.status(400).json({error: err.message})
    }
});

export default colorAnimalRouter;