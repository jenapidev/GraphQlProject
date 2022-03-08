"use strict";
const connectDb = require("./db");
const { ObjectID } = require("mongodb");
const { handleErrors } = require("./errorHandler");

module.exports = {
    createCourse: async (root, { input }) => {
        const defaults = {
            teacher: "",
            topic: "",
        };
        const newCourse = Object.assign(defaults, input);
        let db, course;
        try {
            db = await connectDb();
            course = await db.collection("courses").insertOne(newCourse);
            newCourse._id = course.insertedId;
        } catch (error) {
            handleErrors(error);
        }
        return newCourse;
    },
    // createUser: async (root, { input }) => {
    //     let db, course;
    //     try {
    //         db = await connectDb();
    //         course = await db.collection("Students").insertOne(input);
    //         input._id = course.insertedId;
    //     } catch (error) {
    //         handleErrors(error);
    //     }
    //     return input;
    // },
    // editStudent: async (root, { id, input }) => {
    //     let db, student;
    //     try {
    //         db = await connectDb();
    //         course = await db.collection("Students").updateOne(
    //             { _id: ObjectID(id) },
    //             {
    //                 $set: {
    //                     ...input,
    //                 },
    //             },
    //         );
    //         student = await db
    //             .collection("Students")
    //             .findOne({ _id: ObjectID(id) });
    //     } catch (error) {
    //         handleErrors(error);
    //     }
    //     return student;
    // },
    // editCourse: async (root, { id, input }) => {
    //     let db, course;
    //     try {
    //         db = await connectDb();
    //         course = await db.collection("courses").updateOne(
    //             { _id: ObjectID(id) },
    //             {
    //                 $set: {
    //                     ...input,
    //                 },
    //             },
    //         );
    //         input._id = course.insertedId;
    //         course = await db
    //             .collection("courses")
    //             .findOne({ _id: ObjectID(id) });
    //     } catch (error) {
    //         handleErrors(error);
    //     }
    //     return course;
    // },
    // addStudent: async (root, { courseID, studentID }) => {
    //     let db, student, course;
    //     try {
    //         db = await connectDb();
    //         course = await db
    //             .collection("courses")
    //             .findOne({ _id: ObjectID(courseID) });
    //         student = await db
    //             .collection("Students")
    //             .findOne({ _id: ObjectID(studentID) });

    //         if (!student || !course) {
    //             throw new Error("The student or the course does not exists");
    //         }
    //         await db.collection("courses").updateOne(
    //             {
    //                 _id: ObjectID(courseID),
    //             },
    //             { $addToSet: { students: ObjectID(studentID) } },
    //         );
    //     } catch (error) {
    //         handleErrors(error);
    //     }
    //     return course;
    // },
};
