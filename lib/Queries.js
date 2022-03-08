"use strict";
const connectDb = require("./db");
const { ObjectID } = require("mongodb");
const { handleErrors } = require("./errorHandler");

module.exports = {
    getCourses: async () => {
        let db;
        let courses = [];
        throw new Error("foo");
        try {
            db = await connectDb();
            courses = await db.collection("courses").find().toArray();
        } catch (error) {
            handleErrors(error);
        }
        return courses;
    },
    getCourse: async (root, args) => {
        let db;
        db = await connectDb();
        const course = await db
            .collection("courses")
            .findOne({ _id: ObjectID(args.id) });
        return course;
    },
    getUser: async (root, args) => {
        let db, student;
        try {
            db = await connectDb();
            student = await db
                .collection("Students")
                .findOne({ _id: ObjectID(args.id) });
        } catch (error) {
            handleErrors(error);
        }
        return student;
    },
    getUsers: async () => {
        let db;
        let students = [];
        try {
            db = await connectDb();
            students = await db.collection("Students").find().toArray();
        } catch (error) {
            handleErrors(error);
        }
        return students;
    },
};
