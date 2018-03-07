import { DataStore } from "../interfaces/DataStore";

export function getUsers(dataStore: DataStore) {
  return dataStore.getUsers();
}
export function getUser(dataStore: DataStore, id: string) {
  return dataStore.getUser(id);
}
export function addUser(dataStore: DataStore, name: string) {
  return dataStore.addUser(name);
}
export function updateUser(dataStore: DataStore, id: string, name: string) {
  return dataStore.updateUser(id, name);
}
export function deleteUser(dataStore: DataStore, id: string) {
  return dataStore.deleteUser(id);
}