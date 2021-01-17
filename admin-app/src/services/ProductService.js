import axios from 'axios';

const URL = 'https://jordan-proxy-gateway.herokuapp.com/product-service/api/products/';
// const token = JSON.parse(sessionStorage.getItem("user")).token;
class ProductService {
    
    getAllProducts() {
        let user = JSON.parse(sessionStorage.getItem("user"))?JSON.parse(sessionStorage.getItem("user")):null;
        const config = {
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        }
        return axios.get(URL+"getAll",config);
    }
    getProductById(id) {
        let user = JSON.parse(sessionStorage.getItem("user"))?JSON.parse(sessionStorage.getItem("user")):null;
        const config = {
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        }
        return axios.get(URL+`${id}`,config);
    }
    createProduct(product) {
        let user = JSON.parse(sessionStorage.getItem("user"))?JSON.parse(sessionStorage.getItem("user")):null;
        const config = {
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        }

        return axios.post(URL,product,config);
    }
    updateProduct(product) {
        let user = JSON.parse(sessionStorage.getItem("user"))?JSON.parse(sessionStorage.getItem("user")):null;
        const config = {
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        }
        return axios.put(URL , product,config);
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
export default new ProductService();