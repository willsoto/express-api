# Express API

## Getting Started

### Docker

[Docker](https://www.docker.com/) is being used to manage this project, this README assumes you already have Docker installed.

### Prerequisites

Copy `./containers/.env.example` to `./containers/.env` and fill out any missing fields.

### Install

```sh
docker-compose up -d [--build]
```

### Container commands

The following commands are to be run in the context of a container. You can accomplish this one of two ways.

1. By using docker-compose to run the command directly, `docker-compose run <container> <command>`
2. By using docker-compose to launch a `bash` shell within a container, and then running the command(s) in the shell.
```sh
docker-compose run --rm <container> bash
# a bash shell gets launched within that container
<command>
```

### To create/update the database schema

```sh
docker-compose run --rm web npm run migrate:latest
```

### To seed the database

```sh
docker-compose run --rm web npm run seed:run
```

### Interacting with the database

Using [pgcli](http://pgcli.com/) you can run the following (using default dev environment variables):

```sh
pgcli --host localhost --port 5432 --user postgres express_dev
```

### SSL certificates

Follow the guide [here](https://serversforhackers.com/video/self-signed-ssl-certificates-for-development) or [here](https://certsimple.com/blog/localhost-ssl-fix) and put them into `./certificates` with the following names:

```
cert.pem
key.pem
```

### Logging in with Google

1. Go to the [Google Developer's Console](https://console.developers.google.com/)
2. Create a project
3. Create credentials for an "OAuth client ID"
4. Add the following URLs
    * *Authorized JavaScript origins*
        * `https://localhost:5001`
    * *Authorized Redirect URIs*
        * `https://localhost:5001/auth/login/authorized`
5. Go to `https://localhost:5001/auth/login` and authorize the application
6. You should probably set yourself as admin

```sql
UPDATE users SET is_admin = true WHERE email = '<youremail@gmail.com>';
```
