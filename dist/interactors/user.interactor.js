"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getUsers(dataStore) {
    return dataStore.getUsers();
}
exports.getUsers = getUsers;
function getUser(dataStore, id) {
    return dataStore.getUser(id);
}
exports.getUser = getUser;
function addUser(dataStore, name) {
    return dataStore.addUser(name);
}
exports.addUser = addUser;
function updateUser(dataStore, id, name) {
    return dataStore.updateUser(id, name);
}
exports.updateUser = updateUser;
function deleteUser(dataStore, id) {
    return dataStore.deleteUser(id);
}
exports.deleteUser = deleteUser;
