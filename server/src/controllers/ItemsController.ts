import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(request: Request, response: Response) {
    
        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item => {
            return { 
                id: item.id, 
                title: item.title,
                image_url: `https://3333-beed4b02-2109-4b86-ac0d-9c1f3d3c2adc.ws-us02.gitpod.io/uploads/${item.image}`
                // image_url: `http://localhost:3333/uploads/${item.image}`
            }
        });
    
        return response.json(serializedItems);
    }

}

export default ItemsController;