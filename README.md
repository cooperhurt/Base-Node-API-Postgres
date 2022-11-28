# Base-Node-API-MongoDB

This is a template that allows you to do a base Node.Js API based off of using MongoDB. This can be customized as much or little as you want depending on your use case.

## Geting Started

Create a file called `.env` to allow you to set enviroment variables, this is useful for secrets, URLS, or anything that you potetionally might not want in the use case.

In our case we need at least at `DATABASEURL` which will be the url our DB is running at. I recommend running a Docker instance of MongoDB, but nothing stops you from running it locally.

```
 docker pull mongo
```

This will pull the latest `mongo` instance then you can run `docker run mongo` and it will allow you start up docker on the default port which is `mongodb://localhost:27017/`

Open up `.env` file and add the following:

```
DATABASEURL=mongodb://localhost:27017/appName
```

Now Run

```
npm i
```

Your should now be able to run

```
npm start
```

and the server should succesfully startup

## Testing to ensure it works

Creating a sample User:

```
curl --location --request POST 'localhost:8080/api/user' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "John Doe",
    "email": "johndoe@email.com"
}'
```

Getting All Users

```
curl --location --request GET 'localhost:8080/api/user'
```

Getting Specific User

```
curl --location --request GET 'localhost:8080/api/user/yourUserId'
```
