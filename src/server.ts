import express from 'express'
import { UsersRoute, EventsRoute } from './routes';
import { Router, Request, Response } from 'express';
const app = express();
const route = Router()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.listen(3333, () => 'server running on port 3333')
const baseRoute = '/api/v1';
app.use(baseRoute, UsersRoute);
app.use(baseRoute, EventsRoute);








