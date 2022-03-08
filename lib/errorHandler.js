"use strict";
module.exports = {
    handleErrors: err => {
        console.log(err);
        throw new Error("Something happened on the server");
    },
};
