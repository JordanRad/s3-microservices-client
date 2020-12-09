import axios from 'axios';

const URL = 'http://localhost:8080/order-service/api/orders/';
// const token = JSON.parse(sessionStorage.getItem("user")).token;
class OrderService {
    
    getAllNewOrders() {
        let user = JSON.parse(sessionStorage.getItem("user"))?JSON.parse(sessionStorage.getItem("user")):null;
        const config = {
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        }
        return axios.get(URL+"getAllNew",config);
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

    deleteProduct(id){
        let user = JSON.parse(sessionStorage.getItem("user"))?JSON.parse(sessionStorage.getItem("user")):null;
        const config = {
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        }
        return axios.delete(URL+`${id}`,config);
    }

}
export default new OrderService();