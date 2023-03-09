import { z } from 'zod';



export class CreateEventDTO {
    description?: string;
    dateTime?: Date;

    static validateData = (obj: CreateEventDTO) => {
        obj.dateTime = CreateEventDTO.parseDateTime(obj.dateTime);
        const result = CreateEventSchema.safeParse(obj);
        return result;
    }

    static parseDateTime = (birthDate: any): Date => {
        if (typeof birthDate === 'string') {
            return new Date(birthDate);
        }
        return birthDate;
    }
}

export const CreateEventSchema = z.object({
    description: z.string(),
    dateTime: z.date()
});