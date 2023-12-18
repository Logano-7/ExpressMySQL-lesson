import query from "../config/dbConnection";

async function getOne(employeeID) {
  return await query("SELECT * FROM employees WHERE employeeID = ?", [
    employeeID,
  ]);
}

async function getAll() {
  return await query("SELECT * FROM employees");
}

async function add(employeeObject) {
  return await query("INSERT INTO employees SET ?", [employeeObject]);
}

async function update(employeeID, employeeObject) {
  return await query("UPDATE employees SET ? WHERE employeeID = ?", [
    employeeObject,
    employeeID,
  ]);
}

async function remove(employeeID) {
  return await query("DELETE FROM employees WHERE employeeID = ?", [
    employeeID,
  ]);
}

export default {
    getOne,
    getAll,
    add,
    update,
    remove,
    };