"use strict";
const connectDb = require("./db");
const { ObjectID } = require("mongodb");
const { handleErrors } = require("./errorHandler");

module.exports = {
    Course: {
        students: async ({ students }) => {
            let db, studentsData;
            try {
                db = await connectDb();
                ids = students ? await students.map(id => ObjectID(id)) : [];
                studentsData =
                    ids.length > 0
                        ? await db
                              .collection("Students")
                              .find({ _id: { $in: ids } })
                              .toArray()
                        : [];
            } catch (error) {
                handleErrors(error);
            }

            return studentsData;
        },
    },
    User: {
        __resolveType: (item, context, info) => {
            if (item.class) {
                return `Student`;
            }
            return `Teacher`;
        },
    },
};
