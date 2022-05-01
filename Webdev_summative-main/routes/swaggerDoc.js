const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const userRoute = require("./routes/users");
const commentsRoute = require("./routes/comments");
const postsRoute = require("./routes/posts");
const { json } = require('express');
const SwaggerDocumentation = require("./routes/swagger/SwaggerDocumentation");

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerauth_middlewarejs  = require("./routes/swagger.ui");
