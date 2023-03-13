# Planner UOL
This project is a simple event manager that allows users to create, read, and manage events.


## Features

- Create events with a description, date and time, and a unique identifier
- Read events by filtering them by either their unique identifier or the day of the week they were created
- Deleting events by either their unique identifier or the day of the week they were created
- Create user accounts for signing up and logging in
- Store passwords securely using encryption


## Getting Started
The project uses the Express framework for Node.js. To run the project, you'll need to have Node.js installed on your computer.

1. Clone or download the project repository
2. Open a terminal window in the project's root directory
3. Run npm install to install the project's dependencies
4. Start the server by running npm start
5. The server will be running on http://localhost:3333 with /api/v1 as its base route


## Usage
The project has two main components: events and user accounts.

### Events
To create an event, you can send a POST request to the /events endpoint with the following information in the request body:

description: a brief description of the event
dateTime: the date and time the event will take place

To read events from a weekday, you can send a GET request to the /events?dayOfWeek=weekday endpoint, where "weekday" is one of the following:

- Sunday
- Monday
- Tuesday
- Wednesday
- Thursday
- Friday
- Saturday

To read a specific event, you can send a GET request to the /events/id endpoint, where "id" must be replaced with the event identifier

If you wish to get all events without filtering, just send a GET request to the /events endpoint.

To delete those events, just send a DELETE request to /events/id to delete a single event, or to delete all events from a weekday, you can send a DELETE request to the /events?dayOfWeek=weekday endpoint.

### User Accounts
To create a user account, you can send a POST request to the /signUp endpoint with the following information in the request url parameters:

- firstName: the user's first name
- lastName: the user's last name
- birthDate: the user's date of birth
- city: the city the user lives in
- country: the country the user lives in
- email: the user's email address
- password: the user's password
- confirmPassword: a confirmation of the user's password

To log in, you can send a POST request to the /signIn endpoint with the following information in the request body:

- email: the user's email address
- password: the user's password

The project stores user passwords securely by encrypting them before saving them to the database.


## Endpoints


### Creating Events
- POST /events`: Create a new event

### Getting Events
- GET /events/id: Retrieve a single event by id
- GET /events?dayOfWeek=weekday Retrieve all events from a Weekday
- GET /events/: Get all events

### Deleting Events
- DELETE /events/id: Delete a single event by id
- DELETE /events?dayOfWeek=weekday Delete all events from a Weekday

### Users
- POST /signUp: Create a new user account
- POST /signIn: Log in to an existing user account

Please note that, as shown on "Usage" Section, you must provide all the required parameters in the body of the request in order to create a new account.
The same applies to creating a new event.


## Conclusion
Thank you for testing our app.
This project provides a simple and straightforward way for managing events and user accounts. Whether you're creating a new event or logging into your account, the project has got you covered.