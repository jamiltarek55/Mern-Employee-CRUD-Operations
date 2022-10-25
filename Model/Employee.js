const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// List of columns for Employee schema
let Employee = new Schema({
    indexID: {
        type: Number
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    FullName: {
        type: String
    },
    email: {
        type: String
    },
    designation: {
        type: String
    },
    salary: {
        type: Number
    },
    presentAddress: {
        type: String
    },
    permanentAddress : {
        type: String
    },
    increment: {
        type: Number
    },
    mobile: {
        type: Number
    },
    phone: {
        type: Number
    },
    workingDays: {
        type: Number
    },
    leaveDays: {
        type: Number
    },
    leavingCauses: {
        type: Number
    }
},{
    collection: 'employees'
});

module.exports = mongoose.model('Employee', Employee);