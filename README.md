# Shop

## Project Requirements:

In order to get the project running you need to install:

- [Docker](https://docs.docker.com/get-docker/).

#### Docker:

Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.

## Setting the Project Locally:

#### Cloning the project:

Once you have all the needed requirements installed, clone the project:

``` bash
git clone https://github.com/er5bus/shop
```

#### Configure .env file:

Before you can run the project you need to set the envirment varibles:

``` env
$ cp .env.example .env
```

#### Run the Project in development env:

to run the project type:

``` bash
docker-compose up --build -d
```

Check 0.0.0.0:3000 on your browser!


### Run the Project in production

to build the project type:

``` bash
docker-compose -f docker-compose.build.yaml up --build -d
```

That's it.
