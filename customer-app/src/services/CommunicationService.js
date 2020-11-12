import axios from 'axios';
class CommunicationService{
    static async getProducts(){
        let result = [];
        await axios.get('http://localhost:8080/product-service/api/products/getAll')
        .then((res)=>{
           result = res.data?res.data:["empty"]
        })
        .catch(error=>console.log(error));
        return result; 
    }
}

export default CommunicationService;