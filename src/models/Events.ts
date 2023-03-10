import shortid from 'shortid';

export default class Events {
  _id: string;
  description: string;
  dateTime: Date;
  createdAt: Date;

  constructor(
  ) {
    this._id = shortid.generate();
    this.createdAt = new Date();
    this.description = '';
    this.dateTime = new Date();
  }
}