"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
// import * as axios from "axios"; Why doesn't this work?
class JsonStore {
    getUsers() {
        return axios.get(`http://localhost:3000/users`)
            .then(res => res.data);
    }
    getUser(id) {
        return axios.get(`http://localhost:3000/users/${id}`)
            .then(res => res.data);
    }
    addUser(name) {
        return axios.post('http://localhost:3000/users', {
            name
        }).then(res => res.data);
    }
    updateUser(id, name) {
        return axios.patch('http://localhost:3000/users/' + id, { id, name })
            .then(res => res.data);
    }
    deleteUser(id) {
        return axios.delete('http://localhost:3000/users/' + id)
            .then(res => res.data);
    }
}
exports.JsonStore = JsonStore;
