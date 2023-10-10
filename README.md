# AthletX Web Server

Repository for _AthletX_ Web Server. \
The Server is made with _Node Js_, _Express Js_ and _MongoDB_ as database.

### Documentation
Check out the _REST-API_ of the Server on the dedicated [website](https://athletx-org.github.io/athletx-server/documentation/openapi-doc/).

### Usage
To run the server in localhost:
1. Clone the server repository:
     ```bash
     git clone https://github.com/AthletX-org/athletx-server.git
     ```
3. Provide a `.env` file in the root of the project with the following variables:
    - mongodb_connection_string: the connection string of your mongodb instance
    - jwtKey: a unique key used to generate _Json Web Tokens_ to authenticate users
    - jwtDuration: the duration of the generated tokens (ex: 30d)
4. Run the following command:
    ```bash
    node src/app.js
    ```
3. The server will be accessible at _http://localhost:3000_

   
 

