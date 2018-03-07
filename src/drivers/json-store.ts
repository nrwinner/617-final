import { DataStore } from "../interfaces/DataStore";
const axios = require('axios');
// import * as axios from "axios"; Why doesn't this work?

export class JsonStore implements DataStore {
  getUsers() {
    return axios.get(`http://localhost:3000/users`)
      .then(res => res.data);
  }
  getUser(id: string) {
    return axios.get(`http://localhost:3000/users/${id}`)
      .then(res => res.data);
  }
  addUser(name: string) {
    return axios.post('http://localhost:3000/users', {
      name
    }).then(res => res.data);
  }
  updateUser(id: string, name: string) {
    return axios.patch('http://localhost:3000/users/' + id, { id, name })
      .then(res => res.data);
  }
  deleteUser(id: string) {
    return axios.delete('http://localhost:3000/users/' + id)
      .then(res => res.data);
  }
}