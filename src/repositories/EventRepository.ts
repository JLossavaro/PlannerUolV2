import { Events } from "../models";

export default class EventRepository {
    _events: Array<Events>;
    constructor() {
        this._events = new Array<Events>();
    }

    async create(event: Events) {
        this._events.push(event);
        return event;
    }

    async findById(id: string) {
        return this._events.find(event => event._id === id);
    }

    async findAllByWeekday(weekDay: string) {
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const teste = this._events.filter(event => {
            const eventWeekday = weekdays[event.dateTime.getUTCDay()];
            return eventWeekday === weekDay;
        });
        return teste;
    }

    async findAll() {
        return this._events;
    }

    async delete(id: string) {
        const index = this._events.findIndex(event => event._id === id);
        if (index === -1) {
            throw new Error(`Evento com o ${id} não encontrado.`);
        }
        const deletedEvent = this._events.splice(index, 1);
        return deletedEvent;
    }

    async deleteAllByWeekday(weekDay: string) {
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this._events = this._events.filter(event => {
            const eventWeekday = weekdays[event.dateTime.getUTCDay()];
            return eventWeekday !== weekDay;
        });

        return this._events;
    }

}

