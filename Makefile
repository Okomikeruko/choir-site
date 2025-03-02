# Rails Docker Development Commands

# Default target when you just type 'make'
.PHONY: default
default: up

# Start the application
.PHONY: up
up:
	docker-compose up

# Start the application in detached mode
.PHONY: up-d
up-d:
	docker-compose up -d

# Stop the application
.PHONY: down
down:
	docker-compose down

# Restart the application
.PHONY: restart
restart:
	docker-compose restart

# Update gems without rebuilding (fastest)
.PHONY: bundle
bundle:
	docker-compose run --rm web bundle install
	docker-compose restart web

# Update gems with a full rebuild (slower but more thorough)
.PHONY: bundle-rebuild
bundle-rebuild:
	docker-compose down
	docker-compose build
	docker-compose up -d

# Clean update by removing Gemfile.lock and rebuilding
.PHONY: bundle-clean
bundle-clean:
	docker-compose down
	rm -f Gemfile.lock
	docker-compose build
	docker-compose up -d

# Full rebuild of all containers
.PHONY: rebuild
rebuild:
	docker-compose down
	docker-compose build --no-cache
	docker-compose up -d

# Run Rails console
.PHONY: console
console:
	docker-compose run --rm web rails console

# Run tests
.PHONY: test
test:
	docker-compose run --rm web bundle exec rails test

# Show running containers
.PHONY: ps
ps:
	docker-compose ps

# Show logs
.PHONY: logs
logs:
	docker-compose logs -f

# Run database migrations
.PHONY: migrate
migrate:
	docker-compose run --rm web rails db:migrate

# Reset database
.PHONY: db-reset
db-reset:
	docker-compose run --rm web rails db:drop db:create db:migrate db:seed