export default class Users {
    firstName: string;
    lastName: string;
    birthDate: Date;
    city: string;
    country: string;
    
    email: string;
    password: string;
    
    constructor(
        firstName: string,
        lastName: string,
        birthDate: Date,
        city: string,
        country: string,
        email: string,
        password: string,
      ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.city = city;
        this.country = country;
        this.email = email;
        this.password = password;
      }
  }
  
  
  
  
  