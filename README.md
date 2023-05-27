## Database.js
This file (database.js) contains the code for establishing a connection to a MySQL database and performing database operations. It utilizes the mysql library to interact with the database.

## Prerequisites
Before using this file, make sure you have the following prerequisites installed:

- Node.js
- MySQL database server
## Setup
1. Install the required dependencies by running the following command in the terminal:

```
npm install mysql
```
2. Update the connection details in the code to match your MySQL database configuration:

```
const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
    connectionLimit: 10
});
```
## Usage
To use the database.js module in your project, follow these steps:

1. Import the module in your JavaScript file:

```
const pool = require('./database.js');
```
2. Perform database queries using the pool object. For example:

```
pool.query('SELECT * FROM totalclicks WHERE id = ?', [4], (err, result, fields) => {
    if (err) {
        console.log(err);
    }
    var s = result;
    console.log(s);
});
```


## index.html
This file `(index.html)` is a simple HTML document that includes a JavaScript file `(database.js)` and provides a button to perform a database operation.

## Usage
To use this HTML file in your project, follow these steps:

- Include the `database.js` file in the appropriate location within your project directory structure.

- Open the `index.html` file in a web browser.

Click the "**Click me**" button to trigger the `f()` function defined in the included `database.js` file.

## Dependencies
`database.js`: This file relies on the database.js module for establishing a connection to the MySQL database and performing database queries.
