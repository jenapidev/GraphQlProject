"use strict";
const { DB_USER, DB_PASSWD, DB_HOST } = process.env;
const { MongoClient } = require("mongodb");

const url = `mongodb+srv://${DB_USER}:${DB_PASSWD}@${DB_HOST}`;
let connection;

const connectDB = async () => {
    if (connection) {
        return connection;
    }
    let client;
    try {
        client = await MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        connection = client.db("express");
        return connection;
    } catch (error) {
        console.log(url);
        console.error("there was an error", error);
        process.exit(1);
    }
};

module.exports = connectDB;
