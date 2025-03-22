# Todo App

This is a Todo App project with a backend built in Node.js and a frontend built in Next.js. Both the backend and frontend run in separate containers within a network.

## Prerequisites

- Docker
- Docker Compose

## Project Structure

```
/todo-app
    ├── backend
    ├── frontend
    ├── docker-compose.yml
    └── README.md
```

## Getting Started

### Backend

1. Navigate to the `backend` directory:
        ```sh
        cd backend
        ```

2. Install dependencies:
        ```sh
        npm install
        ```

3. Run the backend server:
        ```sh
        npm start
        ```

### Frontend

1. Navigate to the `frontend` directory:
        ```sh
        cd frontend
        ```

2. Install dependencies:
        ```sh
        npm install
        ```

3. Run the frontend server:
        ```sh
        npm run dev
        ```

### Docker Setup

1. Ensure you are in the root directory of the project.

2. Build and start the containers using Docker Compose:
        ```sh
        docker-compose up --build
        ```

3. The backend will be available at `http://localhost:5000` and the frontend at `http://localhost:3000`.

## Docker Compose Configuration

The `docker-compose.yml` file is configured to set up the network and run the backend and frontend in separate containers.

```yaml
version: '3'
services:
    backend:
        build: ./backend
        ports:
            - "5000:5000"
        networks:
            - todo-app-network

    frontend:
        build: ./frontend
        ports:
            - "3000:3000"
        networks:
            - todo-app-network

networks:
    todo-app-network:
        driver: bridge
```

## License

This project is licensed under the MIT License.