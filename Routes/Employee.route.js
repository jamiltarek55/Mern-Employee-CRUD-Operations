// Importing important packages
const express = require('express');

// Using express and routes
const app = express();
const employeeRoute = express.Router();

// Employee module which is required and imported
let employeeModel = require('../Model/Employee');

// To Get List Of Employees
employeeRoute.route('/').get(function (req, res) {
    employeeModel.find(function (err, employee) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(employee);
        }
    });
});

// To Add New Employee
employeeRoute.route('/addEmployee').post(function (req, res) {
    let employee = new employeeModel(req.body);
    employee.save()
        .then(game => {
            res.status(200).json({ 'employee': 'Employee Added Successfully' });
        })
        .catch(err => {
            res.status(400).send("Something Went Wrong");
        });
});

// To Get Employee Details By Employee ID
employeeRoute.route('/editEmployee/:id').get(function (req, res) {
    let id = req.params.id;
    employeeModel.findById(id, function (err, employee) {
        res.json(employee);
    });
});

//  To Update The Employee Details
employeeRoute.route('/updateEmployee/:id').post(function (req, res) {
    employeeModel.findById(req.params.id, function (err, employee) {
        if (!employee)
            return next(new Error('Unable To Find Employee With This Id'));
        else {
            employee.indexID = req.body.indexID;
            employee.firstName = req.body.firstName;
            employee.lastName = req.body.lastName;
            employee.fullName = req.body.fullName;
            employee.email = req.body.email;
            employee.designation = req.body.designation;
            employee.salary = req.body.salary;
            employee.presentAddress = req.body.presentAddress;
            employee.permanentAddress = req.body.permanentAddress;
            employee.increment = req.body.increment;
            employee.mobile = req.body.mobile;
            employee.phone = req.body.phone;
            employee.workingDays = req.body.workingDays;
            employee.leaveDays = req.body.leaveDays;
            employee.leavingCauses = req.body.leavingCauses;

            employee.save().then(emp => {
                res.json('Employee Updated Successfully');
            })
                .catch(err => {
                    res.status(400).send("Unable To Update Employee");
                });
        }
    });
});

employeeRoute.route('/deleteEmployee/:id').get(function (req, res) {
    employeeModel.findByIdAndRemove({ _id: req.params.id }, function (err, employee) {
        if (err) res.json(err);
        else res.json('Employee Deleted Successfully');
    });
});

module.exports = employeeRoute;