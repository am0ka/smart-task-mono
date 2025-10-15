# Smart Task Mono

MVP for a Smart Task Management System for Distributed Teams.

## Tech Stack

- **Monorepo:** pnpm workspaces, Turborepo
- **Backend:** NestJS, TypeORM, PostgreSQL, Redis (BullMQ), Socket.IO
- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS, React Query
- **Mobile:** React Native (Expo)
- **DevOps:** Docker, GitHub Actions

## Prerequisites

- Node.js (v18+)
- pnpm (v8+)
- Docker & Docker Compose

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd smart-task-mono
    ```

2.  **Copy environment variables:**

    Start by copying the example environment files. Update them with your specific settings as needed.

    ```bash
    cp infra/.env.example .env
    cp infra/api.env.example apps/api/.env
    cp infra/web.env.example apps/web/.env
    cp infra/mobile.env.example apps/mobile/.env
    ```

3.  **Install dependencies:**

    ```bash
    pnpm install
    ```

4.  **Start the development stack:**

    This command will start PostgreSQL, Redis, MinIO, and Mailhog in Docker containers.

    ```bash
    pnpm dev:stack
    ```

5.  **Run database migrations:**

    (This needs to be implemented in the `api` package)

    ```bash
    pnpm db:migrate
    ```

6.  **Seed the database:**

    (This needs to be implemented in the `api` package)

    ```bash
    pnpm db:seed
    ```

7.  **Run the applications:**

    You can run each application in a separate terminal.

    ```bash
    # Run the API (NestJS)
    pnpm dev:api

    # Run the Web App (Next.js)
    pnpm dev:web

    # Run the Mobile App (Expo)
    pnpm dev:mobile
    ```

    Alternatively, run all apps concurrently using Turborepo:
    ```bash
    pnpm dev
    ```

## Available Scripts

- `pnpm dev:stack` - Start required Docker services.
- `pnpm stop:stack` - Stop Docker services.
- `pnpm dev` - Run all apps in development mode.
- `pnpm build` - Build all apps.
- `pnpm lint` - Lint all apps and packages.
- `pnpm test` - Run tests for all apps.
- `pnpm typecheck` - Run type checking across the monorepo.
- `pnpm generate:sdk` - Generate the API client from the backend's OpenAPI spec.
