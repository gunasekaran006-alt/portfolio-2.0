// // type:1
// // server/controller/employee.controller.js
// const employeeModel = require("../models/employee.model");

// // GET API: Retrieve all employees data
// const allEmployees = (req, res) => {
//     if (employeeModel.length === 0) {
//         return res.status(200).json({ message: "No Employee Found in database" });
//     }
//     res.status(200).json(employeeModel);
// };

// // POST API: Create a new employee record
// const createEmployee = (req, res) => {
//     const { name, email, role } = req.body;

//     const newEmployee = {
//         id: Date.now().toString(),
//         name,
//         email,
//         role
//     };
//     employeeModel.push(newEmployee);

//     res.status(201).json({ message: "Employee data Added" });
// };

// // PUT API: Update existing employee record
// const updateEmployee = (req, res) => {
//     const id = req.params.id;
//     const { name, email, role } = req.body;

//     const employee = employeeModel.find(data => data.id === id);

//     if (!employee) {
//         return res.status(404).json({ message: "Employee Profile Not Found" });
//     }

//     // Update logic
//     employee.name = name || employee.name;
//     employee.email = email || employee.email;
//     employee.role = role || employee.role;

//     res.status(200).json({ message: "Employee data updated" });
// };

// // DELETE API: Remove employee record
// const deleteEmployee = (req, res) => {
//     const id = req.params.id;

//     const index = employeeModel.findIndex(data => data.id === id);

//     if (index === -1) {
//         return res.status(404).json({ message: "Employee Profile Not Found" });
//     }

//     employeeModel.splice(index, 1);
//     res.status(200).json({ message: "Employee data removed" });
// };

// module.exports = { allEmployees, createEmployee, updateEmployee, deleteEmployee };


// type:2
const Employee = require("../models/employee.model");

const allEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (err) {
        res.status(500).json({ message: "Error fetching employees", error: err.message });
    }
};

const createEmployee = async (req, res) => {
    try {
        const newEmployee = new Employee(req.body);
        await newEmployee.save();
        res.status(201).json({ message: "Employee data Added to DB" });
    } catch (err) {
        res.status(500).json({ message: "Error saving employee", error: err.message });
    }
};

const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await Employee.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: "Employee Not Found" });
        res.status(200).json({ message: "Employee data updated in DB" });
    } catch (err) {
        res.status(500).json({ message: "Error updating employee", error: err.message });
    }
};

const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Employee.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ message: "Employee Not Found" });
        res.status(200).json({ message: "Employee data removed from DB" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting employee", error: err.message });
    }
};

module.exports = { allEmployees, createEmployee, updateEmployee, deleteEmployee };