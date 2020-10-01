import axios from 'axios';

const API_URL = "http://localhost:8090/api";

class AuthService {
    login(username, password) {
        let user = {
            username: username,
            password: password
        }
        return axios.post(API_URL + "/admin", user);
    }
    logout(){
        localStorage.removeItem('userToken');
    }
}
export default new AuthService();