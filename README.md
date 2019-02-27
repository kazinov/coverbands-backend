# coverbands-backend

### Manual rsync to server
`rsync -avH ./dist -e ssh root@68.183.42.122:/root/coverband/`

### npm install without dependencies
`npm install --only=prod`

### install curl
`sudo apt-get install curl`

### install node
```
curl -sL https://deb.nodesource.com/setup_10.x | bash -
apt-get install -y nodejs
```

## POSTGRES
https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8

### install postgres
`brew install postgresql`

### start postgres
`brew services start postgresql`

### postgres console
`psql postgres`

### create postgres user and add role
```
CREATE ROLE developer WITH LOGIN PASSWORD 'developer123'
ALTER ROLE developer CREATEDB;
\q
```

### login as developer
`psql -d postgres -U developer`

### create database
`CREATE DATABASE coverband;`

### connect table
`\c coverband`

### check tables
`\dt`

## knex
https://knexjs.org/
http://perkframework.com/v1/guides/database-migrations-knex.html