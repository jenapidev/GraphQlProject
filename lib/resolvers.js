"use strict";
const mutations = require("./Mutations");
const queries = require("./Queries");
const types = require("./types");

module.exports = {
    Query: queries,
    Mutation: mutations,
    ...types,
};
