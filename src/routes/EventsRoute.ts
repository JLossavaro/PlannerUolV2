import { Router, Request, Response } from 'express';
import { EventsController } from '../controller';

const route = Router();

const eventsController = new EventsController();


//Atenção: existe um arquivo .json com todas as rotas/exemplos para o POSTMAN

route.post('/events', (req: Request, res: Response) => {
    return eventsController.createEvent(req, res);
});

//*Obs: A rota events se especializa no controller em
//GetAll ou GetallByWeekday 
//caso tenha req.query.dayOfWeek -> GetallByWeekday
route.get('/events', (req: Request, res: Response) => {
    return eventsController.GetAllEvents(req, res);
});

route.get('/events/:id', (req: Request, res: Response) => {
    return eventsController.GetEventsById(req, res);
});

//Obs: A rota recebe por query
//id ou weekday
route.delete('/events/', (req: Request, res: Response) => {
    return eventsController.DeleteEvent(req, res);
});


export default route;