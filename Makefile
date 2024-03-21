# -------------------------🧩 APP-------------------------

app.init:
	docker compose build --no-cache && docker compose down && docker compose up ; docker compose down

## Dev environment

app.build_dev:
	docker compose build --no-cache ; docker compose down

app.start_dev:
	docker compose down && docker compose up ; docker compose down

app.stop_dev:
	docker compose down

## Prod environment

app.build_prod:
	docker build -t host-stack-app:latest -f ./provision/production/Dockerfile ./

app.start_prod:
	@docker stop host-stack-app || true
	@docker rm host-stack-app || true
	@docker run --name host-stack-app -p 5000:3000 host-stack-app:latest

app.stop_prod:
	@docker stop host-stack-app || true
	@docker rm host-stack-app || true

## Prepare image to DockerHub

app.rename_image:
	docker tag host-stack-app:latest hamilgdev/front-secure-flight:0.0.3

app.push_image:
	docker push hamilgdev/front-secure-flight:0.0.3

# -------------------------🔖 FRONTEND-------------------------

frontend.build:
	docker compose build --no-cache frontend

frontend.start:
	docker compose run --rm --name host-stack-frontend \
	--no-deps --service-ports frontend

frontend.stop:
	docker compose stop frontend