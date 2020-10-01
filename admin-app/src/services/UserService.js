import axios from 'axios';

const URL = 'http://localhost:8090/api/users';
const token = JSON.parse(localStorage.getItem("userToken"));
const config = {
    headers:{
        Authorization:`Bearer ${token}`
    }
}
class UserService {
    getUsers() {
        return axios.get(URL,config);
    }
    getuserById(id) {
        return axios.get(URL + `/${id}`);
    }
    createUser(user) {
        return axios.post(URL, user);
    }
    updateUser(id, user) {
        return axios.put(URL + `/${id}`, user);
    }

    deleteEmployee(id){
        return axios.delete(URL+`/${id}`);
    }

}
export default new UserService();