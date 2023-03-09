import { CreateEventDTO, CreateUserDTO } from "../DTO";
import { EventRepository } from "../repositories";
import { Events } from "../models";

export default class EventsService {
    _eventRepository: EventRepository;
    constructor() {
        this._eventRepository = new EventRepository();
    }

    async GetAllEvents() {
        return await this._eventRepository.findAll();
    }

    async CreateEvents(eventDTO: CreateEventDTO) {
        let events: Events = new Events();
        const newEvent = {
            dateTime: eventDTO.dateTime,
            description: eventDTO.description,
            _id: events._id,
            createdAt: events.createdAt
        }
        return await this._eventRepository.create(newEvent as Events);
    }



    async GetEventsById(id: string) {
        const result = await this._eventRepository.findById(id);
        if (!result) {
            throw new Error("Evento não encontrado");
        }
        return result;
    }

    async GetAllEventsByWeekday(weekDay: string) {
        const result = await this._eventRepository.findAllByWeekday(weekDay);
        if (result.length == 0) {
            throw new Error("Não existe evento para este dia");
        }
        return result;
    }

    async DeleteEventById(id: string) {        
        const result = await this._eventRepository.delete(id);
        if (!result) {
            throw new Error("Evento não encontrado");
        }
        return result;
    }

    async DeleteAllEventsFromWeek(weekDay: string) {
        const result = await this._eventRepository.deleteAllByWeekday(weekDay);
        return result;
    }

}