import { CreateEventDTO, CreateUserDTO } from "../DTO";
import { EventRepository } from "../repositories";
import { IEvent } from "../models/Events";

export default class EventsService {
    
    _eventRepository: EventRepository;
    
    constructor() {
        this._eventRepository = new EventRepository();
    }

    async GetAllEvents() {
        return await this._eventRepository.findAll();
    }

    async CreateEvents(createEventDTO: CreateEventDTO) {
        try{
            const event = {
                dateTime: createEventDTO.dateTime,
                description: createEventDTO.description,
                createdAt: createEventDTO.createdAt,

                
            };
            return await this._eventRepository.create(event as IEvent);

        }catch (error) {
            throw error;
        }
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