# Back Matac

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white)

## Project Description

Back Matac is a backend application built using NestJS and TypeScript, designed to manage various entities related to construction projects. The application provides a robust architecture for handling data related to alignments, constructions, attachments, and terrains. It serves as a foundation for building scalable and maintainable server-side applications.

### Key Features
- **Modular Architecture**: Organized into distinct modules for alignment, construction, attachment, and terrain management.
- **Data Transfer Objects (DTOs)**: Utilizes DTOs for structured data validation and transfer.
- **Entity Management**: Provides a clear structure for defining and managing entities within the application.
- **RESTful API**: Implements RESTful endpoints for interacting with the application.

## Tech Stack

| Technology      | Description                       |
|------------------|-----------------------------------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) | JavaScript runtime for building server-side applications. |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) | A superset of JavaScript that adds static types. |
| ![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white) | A progressive Node.js framework for building efficient and scalable server-side applications. |

## Installation Instructions

### Prerequisites
- Node.js (v14 or later)
- npm (Node Package Manager)

### Step-by-Step Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/Asnah0111/back-matac.git
   cd back-matac
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file based on the `.env.example` file provided in the root directory.
   - Update the `.env` file with your specific configuration.

### Example `.env` file
```plaintext
DATABASE_URL=your_database_url
PORT=3000
```

## Usage

### Running the Project
To start the application, run the following command:
```bash
npm run start
```

### Basic Usage
Once the application is running, you can access the API endpoints for managing alignments, constructions, attachments, and terrains. The base URL will be `http://localhost:3000`.

## Project Structure

```
back-matac/
├── dist/                     # Compiled output files
├── src/                      # Source files
│   ├── alignment/            # Alignment module
│   │   ├── dto/              # Data Transfer Objects for alignment
│   │   ├── entities/         # Alignment entity definitions
│   │   ├── alignment.controller.ts  # Controller for handling alignment requests
│   │   ├── alignment.module.ts      # Module definition for alignment
│   │   └── alignment.service.ts     # Service for business logic related to alignment
│   ├── construction/         # Construction module
│   │   ├── dto/              # Data Transfer Objects for construction
│   │   ├── entities/         # Construction entity definitions
│   │   ├── construction.controller.ts  # Controller for handling construction requests
│   │   ├── construction.module.ts      # Module definition for construction
│   │   └── construction.service.ts     # Service for business logic related to construction
│   ├── piece-jointe/        # Attachment module
│   │   ├── dto/              # Data Transfer Objects for attachments
│   │   ├── entities/         # Attachment entity definitions
│   │   ├── piece-jointe.controller.ts  # Controller for handling attachment requests
│   │   ├── piece-jointe.module.ts      # Module definition for attachments
│   │   └── piece-jointe.service.ts     # Service for business logic related to attachments
│   ├── terrain/              # Terrain module
│   │   ├── dto/              # Data Transfer Objects for terrains
│   │   ├── entities/         # Terrain entity definitions
│   │   ├── terrain.controller.ts  # Controller for handling terrain requests
│   │   ├── terrain.module.ts      # Module definition for terrain
│   │   └── terrain.service.ts     # Service for business logic related to terrain
│   ├── app.controller.ts      # Main application controller
│   ├── app.module.ts          # Main application module
│   ├── app.service.ts         # Main application service
│   └── main.ts                # Entry point of the application
├── uploads/                  # Directory for uploaded files
├── .env                      # Environment variables
├── .env.example              # Example environment variables
├── package.json              # Project metadata and dependencies
└── tsconfig.json             # TypeScript configuration
```

## Contributing

We welcome contributions to Back Matac! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request. 

Thank you for your interest in contributing!
