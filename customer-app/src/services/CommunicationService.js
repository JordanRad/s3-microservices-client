import axios from 'axios';

class CommunicationService {
    static async register(user) {
        let result = [];
        await axios.post('https://jordan-proxy-gateway.herokuapp.com/account-service/api/register', user)
            .then((res) => {
                result = res.data ? res.data : ["empty"]
            })
            .catch(error => console.log(error));
        return result;
    }

    static async getProducts() {
        let result = [];
        await axios.get('https://jordan-proxy-gateway.herokuapp.com/product-service/api/products/getAll', {
                headers: {
                    "crossDomain": true
                }
            })
            .then((res) => {
                result = res.data ? res.data : ["empty"]
            })
            .catch(error => console.log(error));
        return result;
    }


    static async login(email, password) {
        let result = "";
        let user = {
            email: email,
            password: password
        }
        await axios.post('https://jordan-proxy-gateway.herokuapp.com/account-service/api/login', user)
            .then((res) => {
                result = res.data ? res.data : ["empty"]
            })
            .catch(error => console.log(error));
        return result;
    }

    static async updateUser(user) {
        let token = user.token;
        let result
        await axios.put(`https://jordan-proxy-gateway.herokuapp.com/account-service/api/users/${user.id}`, user, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(res => result = res.data)
            .catch(e => console.log(e))

        return result;
    }

    static async sendOrder(order) {
        let user = JSON.parse(sessionStorage.getItem("user"))
        let token = user.token
        let result
        //console.log(order)
        await axios.post("https://jordan-proxy-gateway.herokuapp.com/order-service/api/orders/", order, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(res => result = res.data.split(',')[1])
            .catch(e => console.log(e))

        return result;
    }
    
    static async getItemById(id){
        let result;
        await axios.get(`https://jordan-proxy-gateway.herokuapp.com/product-service/api/products/${id}`)
            .then(res => result = res.data)
            .catch(e => console.log(e))

        return result;
    }
}


export default CommunicationService;