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

    static async updateUser(){
        let user = JSON.parse(sessionStorage.getItem("user"))
        let token = user.token;
        let updatedUser = {
            email: user.email,
            password: user.password,
            firstName:user.firstName,
            lastName:user.lastName,
            address:user.address
        }
        console.log(updatedUser)
        let result 
        await axios.put(`http://localhost:8080/account-service/api/users/${user.id}`,updatedUser,{
            headers:{
                "Authorization":`Bearer ${token}`
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
        await axios.post("http://localhost:8080/order-service/api/orders/",order,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        })
            .then(res => result = res.data.split(',')[1])
            .catch(e => console.log(e))

        return result;
    }

}


export default CommunicationService;