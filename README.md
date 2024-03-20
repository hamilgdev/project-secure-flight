# 🛩️ Secure Flight

Secure Flight is a project to manage the flights of an airline. 

## 📜 System Requirement

- Node.js `20.10.0` or later [👉 Install Node](https://nodejs.org/es/download)
- NPM [👉 Install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Nextjs `14.1.3` or later [👉 Install Next](https://nextjs.org/docs/getting-started). Using App Router.
- GNU Make `3.81` or later [👉 Install Make](https://www.gnu.org/software/make/)

### Visual Studio Code

Extensions aditionals

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): It helps you see the alerts from the linter in real-time in your editor.

## 🗃️ Environment

You can use the `.env.template` file to create your `.env` file. This file is used to set the environment variables.

## 📚 Folder Structure

- `/`: Source code base. Frontend made with **NextJS**
- `provision/`: The files to provision the Docker containers
- `Makefile`: The file to run the commands to initialize, execute and more the application

## 🛠️ Setting implementation

1. Determine the **environment variables** in the `.env` file. According to the `.env.template` initial file defined in the root `/` of the project
2. Using the **Makefile** of the root `/` of the project, run the following command to initialize installing the dependencies of **frontend**

    - ```bash
      make app.init
      ```

Build the containers. Go to the next section [🐳 Running the app inside containers](#-running-the-app-inside-containers)

## 🐳 Running the app inside containers

To run the application with containers you will need:

- Docker. [👉 Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose. [👉 Install Docker Compose](https://docs.docker.com/compose/install/)

then run the following command int the root `/` to initialize the application:

Build the containers

```bash
  make app.build_dev
```

Run the containers

```bash
  make app.start_dev
```

Or you can run the **frontend** container with one command

```bash
  make frontend.start
```

## 🚀 Running the implementation

When the application is running, usging the default configuration

you can access the **frontend** in the following url:

- [http://localhost:4200](http://localhost:4200)
