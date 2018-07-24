This project is used to demostrate the usage of GraphQL, React and Express

## A express-graphql server listening on port 3001

### The users data is stored in graphql-server/data/users.js

### Schema is loaded from graphql-server/schema.js

## React server is listening on port 3000

## concurrently start both react server and graphql server

### http://localhost:3000/ to display all the users data

### http://localhost:3000/search to search for the users

### http://localhost:3000/todos/{userId} to show the todos for the user