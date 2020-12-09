import axios from 'axios';

const URL = 'http://localhost:8080/account-service/api/users/';
// const token = JSON.parse(sessionStorage.getItem("user")).token;
const config = {
    headers:{
        Authorization:`Bearer hddh`
    }
}
class UserService {
    getUsers() {
        return axios.get(URL+"getAll",config);
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