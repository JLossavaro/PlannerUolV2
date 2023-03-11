import { Router, Request, Response } from 'express';
import { EventsController } from '../controller';

const route = Router();

const eventsController = new EventsController();


//Atenção: existe um arquivo .json com todas as rotas/exemplos para o POSTMAN

/**
 * @swagger
 * /events:
 *   post:
 *     summary: Create a new event
 *     description: Creates a new event with a given description and date/time.
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 description: The description of the event.
 *               dateTime:
 *                 type: string
 *                 format: date-time
 *                 description: The date and time of the event Date-12/05/2024.
 *             required:
 *               - description
 *               - dateTime
 *     responses:
 *       '201':
 *         description: The created event.
 *       '400':
 *         description: Invalid input.
 *       '500':
 *         description: Internal server error.
 */

route.post('/events', (req: Request, res: Response) => {
    return eventsController.createEvent(req, res);
});

/**
 * @swagger
 * /events:
 *   get:
 *     summary: GetAll / GetallByWeekday
 *     description: Retrieve a list of all events or events occurring on a specific weekday, based on params.
 *     parameters:
 *       - in: query
 *         name: dayOfWeek
 *         description: The weekday to filter by.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A list of events.
 *         content:
 *             schema:
 *               type: array
 * 
 */
route.get('/events', (req: Request, res: Response) => {
    return eventsController.GetAllEvents(req, res);
});

/**
 * @swagger
 * /events/{id}:
 *   get:
 *     summary: Get a single event by ID.
 *     description: Retrieve an event by its unique identifier.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The unique identifier of the event to retrieve.
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       '200':
 *         description: The event object.
 *         content:
 *       '404':
 *         description: The event with the specified ID was not found.
 */
route.get('/events/:id', (req: Request, res: Response) => {
    return eventsController.GetEventsById(req, res);
});

/**
 * @swagger
 * /events:
 *   delete:
 *     summary: Delete an event by ID
 *     description: Delete an event by its ID.
 *     parameters:
 *       - in: query
 *         name: id
 *         description: The ID of the event to delete.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Event successfully deleted.
 *       '404':
 *         description: Event not found.
 *       '500':
 *         description: Internal server error.
 */
route.delete('/events/', (req: Request, res: Response) => {
    return eventsController.DeleteEvent(req, res);
});


export default route;