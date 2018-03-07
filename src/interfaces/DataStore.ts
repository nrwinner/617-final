export interface DataStore {
  getUsers();
  getUser(id: string);
  addUser(name: string);
  updateUser(id: string, name: string);
  deleteUser(id: string);
}