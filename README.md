# Choir Site

A Ruby on Rails web application for managing a choir's repertoire, performances, rehearsals, and communications.

## Features

- Song library with sheet music and audio files
- Performance and rehearsal scheduling
- Member management
- News articles
- Contact form
- Admin dashboard

## Technology Stack

- Ruby 3.0.7
- Rails 6.1.7
- PostgreSQL 13
- Docker for development
- Bootstrap for UI
- jQuery and DataTables for interactive components
- Action Cable for real-time updates
- Active Storage for file uploads

## Prerequisites

### For All Platforms
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- Git

## Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/your-username/choir-site.git
cd choir-site
```

## Setup for Mac OS

### 1. Install Prerequisites

Using Homebrew:

```bash
# Install Homebrew if not already installed
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Docker and Docker Compose
brew install --cask docker
```

### 2. Start Docker Desktop

Launch Docker Desktop from your Applications folder or using Spotlight search.

### 3. Create PostgreSQL Network

```bash
docker network create postgres_network
```

### 4. Start PostgreSQL Container

```bash
docker run --name postgres13 \
  --network postgres_network \
  -e POSTGRES_USER=choir_postgres \
  -e POSTGRES_PASSWORD=password \
  -p 5432:5432 \
  -d postgres:13
```

### 5. Build and Start the Application

```bash
# Build the Docker images
docker-compose build

# Start the application services
docker-compose up
```

### 6. Set Up the Database

In a new terminal window:

```bash
docker-compose exec web rails db:create db:migrate db:seed
```

## Setup for Windows

### 1. Install Prerequisites

- Install [Docker Desktop for Windows](https://docs.docker.com/desktop/install/windows-install/)
- If using WSL 2, ensure it's properly configured with Docker Desktop

### 2. Start Docker Desktop

Launch Docker Desktop from the Start menu.

### 3. Open Windows PowerShell or Command Prompt as Administrator

### 4. Create PostgreSQL Network

```powershell
docker network create postgres_network
```

### 5. Start PostgreSQL Container

```powershell
docker run --name postgres13 `
  --network postgres_network `
  -e POSTGRES_USER=choir_postgres `
  -e POSTGRES_PASSWORD=password `
  -p 5432:5432 `
  -d postgres:13
```

### 6. Build and Start the Application

```powershell
# Build the Docker images
docker-compose build

# Start the application services
docker-compose up
```

### 7. Set Up the Database

In a new terminal window:

```powershell
docker-compose exec web rails db:create db:migrate db:seed
```

## Using WSL 2 (Windows Subsystem for Linux) on Windows

If you're using WSL 2, you can also follow these Linux-like steps within your WSL 2 terminal:

```bash
# Install WSL 2 if not already installed
wsl --install

# Create PostgreSQL network
docker network create postgres_network

# Start PostgreSQL container
docker run --name postgres13 \
  --network postgres_network \
  -e POSTGRES_USER=choir_postgres \
  -e POSTGRES_PASSWORD=password \
  -p 5432:5432 \
  -d postgres:13

# Start the application
docker-compose up
```

## Accessing the Application

Once the application is running:

- Web application: http://localhost:3000
- Admin interface: http://localhost:3000/admin

Default admin credentials:
- Email: test@email.com
- Password: password

## Development Workflow

### Running Tests

```bash
# Run all tests
docker-compose run --rm test rails test

# Run specific test file
docker-compose run --rm test rails test test/path/to/file
```

### Common Docker Commands

```bash
# View running containers
docker-compose ps

# Restart the application
docker-compose restart

# Stop containers
docker-compose down

# Run a Rails console
docker-compose exec web rails console

# Run migrations
docker-compose exec web rails db:migrate

# Using Makefile shortcuts
make up       # Start the application
make console  # Run Rails console
make test     # Run tests
make logs     # View logs
make migrate  # Run migrations
```

## Project Structure

- `app/` - Main application code
    - `controllers/` - Request handlers
    - `models/` - Database models
    - `views/` - UI templates
    - `assets/` - CSS, JavaScript, and images
    - `datatables/` - DataTables configuration
    - `presenters/` - View presenters
- `config/` - Application configuration
- `db/` - Database migrations and seeds
- `test/` - Test files

## Contributing

1. Create a feature branch from `master`
2. Make your changes
3. Run tests to ensure they pass
4. Submit a pull request

## Deployment

This application is configured for deployment to Heroku using Docker containers.

### Deploying to Heroku

```bash
# Login to Heroku
heroku container:login

# Create an app in Heroku
heroku create your-app-name

# Push and release the container
heroku container:push web -a your-app-name
heroku container:release web -a your-app-name

# Run database migrations
heroku run rails db:migrate -a your-app-name
```

## Troubleshooting

### Database Connection Issues

If you encounter database connection issues:

```bash
# Check if PostgreSQL container is running
docker ps | grep postgres

# Restart PostgreSQL container if needed
docker restart postgres13

# Check logs for errors
docker logs postgres13
```

### Application Errors

If the application fails to start:

```bash
# Check application logs
docker-compose logs web

# Remove server.pid if it exists (common issue after unexpected shutdown)
rm tmp/pids/server.pid
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.