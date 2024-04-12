expressive-error-handler
=====================


 Overview
=====================
Expressive Error Handler is a lightweight npm package designed to simplify error handling in Express.js applications. It provides utility functions to catch synchronous errors and create custom error objects, along with middleware to handle errors gracefully.

Features
=====================
*Synchronous Error Handling: Easily catch synchronous errors in your Express middleware using catchSyncError.
* Custom Error Objects: Create custom error objects with specific status codes and messages using newError.
* Graceful Error Middleware: Handle errors gracefully with the provided error middleware, ensuring consistent error responses across your application.
* Robust Configuration: Configure custom handlers for specific status codes, views, or static files, as well as specify timeout values and exit status codes.
* Enhanced Error Handling: Easily catch synchronous errors in your Express middleware using catchSyncError in conjunction with try-catch blocks.
* Custom Error Objects: Create custom error objects with specific status codes and messages using newError from the ErrorHandler module.
* Efficient Error Middleware: Utilize the errorMiddleware function to centralize error handling logic and ensure consistent error responses across your application.

Installation
=====================
You can install Expressive Error Handler via npm:
```js
npm install expressive-error-handler
```
Uses
=====================
Import the necessary functions and middleware:
```js
const { catchSyncError, newError } = require('expressive-error-handler');
// Define your Express middleware functions using catchSyncError:
exports.user = catchSyncError(async (req, res, next) => {
    if (!name) {
        return next(newError('Name is required.', 400));
    }
    res.send('hello world');
});
```

Additional Functionality
=========================
The errorMiddleware function has been enhanced to handle various types of errors, including:

* CastError: Resource not found due to invalid input.
* Duplicate Key Error: Attempting to enter duplicate data.
* MongoError: General MongoDB-related errors.
* JsonWebTokenError: Invalid JSON Web Token.
* TokenExpiredError: Expired JSON Web Token.

Use the error middleware in your Express app:
```js
const express = require('express');
const app = express();
const { catchSyncError, newError ,errorMiddleware } = require('expressive-error-handler');
// Your routes and other middleware here...

// Error middleware
app.use(errorMiddleware);
```

Examples
Here's a more detailed example demonstrating how to use Expressive Error Handler:
## Quick start:

```js
const express = require('express');
const { catchSyncError, newError ,errorMiddleware } = require('expressive-error-handler');
const app = express();

// Define middleware
const validateUser = catchSyncError(async (req, res, next) => {
    const { name } = req.body;
    if (!name) {
        return next(newError('Name is required.', 400));
    }
    next();
});

// Route
app.post('/user', validateUser, (req, res) => {
    res.send('User created successfully!');
});

// Second example with catching the error if any fail while creating the data 
app.post('/partner/about-self', catchAsyncErrors(async (req, res, next) => {
  const { name, email, phone } = req.body;
 
  if (!name || !email || !phone) {
    return next(new Error("Please provide name and other details.", 404));
  }
    const data = await User.create({ name, email, phone });
    res.status(201).json({
      success: true,
      message: 'Created successfully',
      data
    });
}));


// Error middleware
app.use(errorMiddleware);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
```
## Client-Side Response Structure

When using this package, the response structure follows a predefined format to ensure consistency and ease of handling on the client side. The response includes the following fields:

* success (boolean): Indicates whether the operation was successful or not.
* message (string): Provides additional information or context about the operation.
* statusCode (number): Represents the HTTP status code associated with the response.

# example
```js
{
    "success": false,
    "message": "your message.",
    "statusCode": 404
}
```

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request on the GitHub repository.

## License
Expressive Error Handler is licensed under the MIT License. See the LICENSE file for details.