import { IEvent, default as eventSchema } from '../models/Events';
import mongoose, { Model } from 'mongoose';


export default class EventRepository {
    private readonly EventModel: Model<IEvent>

    constructor() { 
        this.EventModel = mongoose.model<IEvent>('Event', eventSchema)
    }

    async create(event: IEvent) {
        const newEvent = new this.EventModel(event);
        return newEvent.save();
    }
 
    async findById(id: string) {
        return this.EventModel.findById(id);
    }

    async findAllByWeekday(weekDay: string) {
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const weekdayIndex = weekdays.indexOf(weekDay);
        if (weekdayIndex === -1) {
          throw new Error('Invalid weekday');
        }
        const events = await this.EventModel.find({ dateTime: { $gte: new Date(), $lt: new Date(new Date().setDate(new Date().getDate() + 7)) } });
        const eventsByWeekday = events.filter((event) => {
          const eventDate = new Date(event.dateTime);
          const eventWeekdayIndex = eventDate.getDay();
          return eventWeekdayIndex === weekdayIndex;
        });
        return eventsByWeekday;
      }

    async findAll() {
        return this.EventModel.find();
    }

    async delete(id: string) {
        const deletedEvent = await this.EventModel.findByIdAndDelete(id);
        if (!deletedEvent) {
        throw new Error(`Evento com o id ${id} não encontrado.`);
        }
        return deletedEvent;
    }

    async deleteAllByWeekday(weekDay: string) {
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const weekdayIndex = weekdays.indexOf(weekDay);
        if (weekdayIndex === -1) {
            throw new Error('Invalid weekday');
        }
        const events = await this.EventModel.find({ dateTime: { $gte: new Date(), $lt: new Date(new Date().setDate(new Date().getDate() + 7)) } });
        const eventsToDelete = events.filter((event) => {
            const eventWeekdayIndex = event.dateTime.getUTCDay();
            return eventWeekdayIndex === weekdayIndex;
        });
        
        const result = await this.EventModel.deleteMany({ _id: { $in: eventsToDelete.map((event) => event._id) } });
        return result;
    }
}

