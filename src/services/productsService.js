import  axios  from "axios";

class ProductsService{
    static getAllProducts  = () => axios.get('/products')
    static getSingleProduct = (productId) => axios.get(`/products/${productId}`)
}


export default ProductsService