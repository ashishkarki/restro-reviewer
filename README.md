# Restro Reviewer

Restro Reviewer is a web application for reviewing and discovering restaurants. It consists of a frontend built with React and a backend built with NestJS, both using TypeScript and integrated with AWS Amplify.

## Features

-   View a list of restaurants.
-   View restaurant details including cuisine, location, ratings, and reviews.
-   Add reviews and ratings for restaurants.
-   User authentication using AWS Cognito.
-   Navigate between different sections of the application.

## Technologies Used

-   **Frontend**:

    -   React with TypeScript
    -   React Router for navigation
    -   Zustand for state management
    -   Styled-components for styling
    -   AWS Amplify for authentication and backend integration
    -   Dockerized for consistent development and deployment

-   **Backend**:
    -   NestJS with TypeScript
    -   RESTful API for restaurant data
    -   Integration with AWS services
    -   Dockerized alongside frontend and database services

## Technical Overview

For more details on the technical aspects and architecture of this project, see the [Technical Overview](TECHNICAL_OVERVIEW.md).

## Setup

### Frontend

1. Navigate to the `frontend` directory.
2. Run `pnpm install` to install dependencies.
3. Configure AWS Amplify as needed.
4. Run `pnpm start` to start the development server.

### Backend

1. Navigate to the `backend` directory.
2. Run `pnpm install` to install dependencies.
3. Run `pnpm run start` to start the NestJS backend server.

## Dockerized Environment

The application is fully Dockerized, including the frontend, backend, and database services, ensuring a consistent development and deployment environment.

### Running with Docker Compose

1. Ensure Docker and Docker Compose are installed.
2. Use `docker-compose up` to start the entire stack.

## REST API

The backend provides a GraphQL API for restaurant data. You can access it at `http://localhost:4000/graphql`.

-   `/restaurants`: Get a list of all restaurants.
-   `/restaurants/:id`: Get details of a specific restaurant by ID.

## Future Enhancements

-   Integration with cloud services for data storage and processing.
-   Improved UI and user experience.
-   Expansion of restaurant data and features.

## Contributing

Contributions to the Restro Reviewer project are welcome! Feel free to open issues or pull requests.

## License

This project is licensed under the MIT License.
