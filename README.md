# Restro Reviewer

Restro Reviewer is a web application for reviewing and discovering restaurants. It consists of a frontend built with React and a backend built with NestJS, both using TypeScript.

## Features

- View a list of restaurants.
- View restaurant details including cuisine, location, ratings, and reviews.
- Add reviews and ratings for restaurants.
- Navigate between different sections of the application.

## Technologies Used

- **Frontend**:
  - React
  - TypeScript
  - React Router for navigation
  - Zustand for state management
  - Styled-components for styling

- **Backend**:
  - NestJS
  - TypeScript
  - RESTful API for restaurant data
  - Sample data provided

## Setup

### Frontend

1. Navigate to the `frontend` directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.

### Backend

1. Navigate to the `backend` directory.
2. Run `npm install` to install dependencies.
3. Run `npm run start` to start the NestJS backend server.

## REST API

The backend provides a RESTful API for restaurant data. You can access it at `http://localhost:3000`.

- `/restaurants`: Get a list of all restaurants.
- `/restaurants/:id`: Get details of a specific restaurant by ID.

## Future Enhancements

- Authentication and user accounts.
- Integration with cloud services for data storage.
- Improved UI and user experience.

## Contributing

Contributions to the Restro Reviewer project are welcome! Feel free to open issues or pull requests.

## License

This project is licensed under the MIT License.
