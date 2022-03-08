"use strict";
require("dotenv").config();
const { makeExecutableSchema } = require("graphql-tools");
const express = require("express");
const expressGQL = require("express-graphql");
const { readFileSync } = require("fs");
const { join } = require("path");
const resolvers = require("./lib/resolvers");

// define schema
const typeDefs = readFileSync(join(__dirname, "lib", "schema.graphql"), "utf8");

const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();
const port = process.env.PORT || 300;

app.use(
    "/api",
    expressGQL({
        schema,
        rootValue: resolvers,
        graphiql: true,
    }),
);

const server = app.listen(port, () => {
    console.log(
        `server running at http://localhost:${server.address().port}/api`,
    );
});
