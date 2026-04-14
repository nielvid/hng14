# HNG14 Simple Express API

A lightweight Node.js + Express API that exposes basic health and profile endpoints and responds with JSON content type.

## Features

- Express-based HTTP server
- JSON API responses
- Global `Content-Type: application/json` header
- Simple endpoints for service health and developer profile
- Docker support for containerized runs

## Tech Stack

- Node.js
- Express

## Project Structure

```text
.
├── index.js
├── package.json
├── package-lock.json
├── Dockerfile
└── README.md
```

## Prerequisites

For local setup:

- Node.js (v18+ recommended)
- npm (comes with Node.js)

For container setup:

- Docker Desktop or Docker Engine

## Local Setup and Run

1. Clone the repository:

```bash
git clone https://github.com/nielvid/hng14.git
cd hng14
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

4. The API will be available at:

```text
http://localhost:8000
```

Production URL:

```text
https://techops.name.ng
```

## API Endpoints

All endpoints return JSON and include:

`Content-Type: application/json`

### `GET /`

Checks if the API is running.

Example response:

```json
{
  "message": "The api is running"
}
```

### `GET /help`

Returns a simple health status.

Example response:

```json
{
  "message": "healthy"
}
```

### `GET /me`

Returns developer profile information.

Example response:

```json
{ message: `Godson Chinonyerem godsonesq@gmail.com https:\/\/github.com/nielvid`   }    
```

## Quick API Test

Use curl to test endpoints:

```bash
curl -i http://localhost:8000/
curl -i http://localhost:8000/help
curl -i http://localhost:8000/me
```

## Run with Docker

### 1. Build the image

From the project root:

```bash
docker build -t hng14-api .
```

### 2. Run the container

```bash
docker run --name hng14-api-container -p 8000:8000 hng14-api
```

The API will now be available at:

```text
http://localhost:8000
```

### 3. Stop and remove container

```bash
docker stop hng14-api-container
docker rm hng14-api-container
```

## Environment and Port Notes

- Current app port is hardcoded to `8000` in `index.js`.
- If needed, you can later update the app to use `process.env.PORT`.

## npm Scripts

- `npm start`: Start the API server
- `npm test`: Placeholder test script (currently not implemented)

## Troubleshooting

- If port `8000` is in use, stop the conflicting process or change the app port.
- If dependencies fail to install, delete `node_modules` and `package-lock.json`, then run `npm install` again.
- If Docker build fails, ensure Docker is running and retry the build.

## License

ISC
