import axios from 'axios';
class AuthService {
    login(email, password) {
        let user = {
            email: email,
            password: password
        }
        return axios.post("https://jordan-proxy-gateway.herokuapp.com/account-service/api/admin", user);
    }
    logout(){
        sessionStorage.clear();
    }
}
export default new AuthService();