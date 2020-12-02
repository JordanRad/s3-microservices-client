import axios from 'axios';
class CommunicationService {
    static async getProducts() {
        let result = [];
        await axios.get('http://localhost:8080/product-service/api/products/getAll', {
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
        await axios.post('http://localhost:8080/account-service/api/login',user)
            .then((res) => {
                result = res.data ? res.data : ["empty"]
            })
            .catch(error => console.log(error));
        return result;
    }
    static async sendOrder(order) {
       let result 
        await axios.post("http://localhost:8080/order-service/api/orders/",order)
            .then(res => result = res.data.split(',')[1])
            .catch(e => console.log(e))

        return result;
    }
}

export default CommunicationService;