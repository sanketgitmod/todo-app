import axios from "axios";
import { JPA_API_URL } from "./../../../Constants";

const retriveAllTodo = (name) => {
  //console.log('executed service')
  return axios.get(`${JPA_API_URL}/users/${name}/todos`);
};
const todoDelete = (name, id) => {
  return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`);
};
const todoUpdate = (name, id, todo) => {
  return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo);
};
const todoRetrive = (name, id) => {
  return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`);
};

export { retriveAllTodo, todoDelete, todoRetrive, todoUpdate };
