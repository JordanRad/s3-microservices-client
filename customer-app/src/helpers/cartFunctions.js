const saveCart = (cart)=>{
    //console.log(cart)
    localStorage.setItem('cart',JSON.stringify(cart));
}
const clearCart = ()=>{
    localStorage.removeItem("cart");
    return []
}
const getCart = ()=>{
    let cart = localStorage.getItem("cart");
    return cart ?JSON.parse(cart):[];
}

const addToCart = (item)=>{
    let cart= getCart()
    cart.push(item)
    saveCart(cart)
    
}

const deleteFromCart = (itemName)=>{
    let index = getCart().findIndex(item => item.name === itemName)
    let cart = getCart();
    cart.splice(index,1)
    saveCart(cart);
}

const itemQuantityCart = ()=>{
    let cart = getCart();
    let counter=0
    cart.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

    //Count items with similiar names
    .map((item, index, array) => {
        let itemWithQuantity = item;
        counter++;
        if (typeof array[index + 1] === 'undefined' || item.name !== array[index + 1].name) {
            itemWithQuantity.quantity = counter;
            counter = 0;
            return itemWithQuantity;
        }
    })
    //Clear the 'undefined' objects in the order array
    .filter((item) => typeof item != 'undefined');
    return cart.filter(item=>item.hasOwnProperty("quantity"));
}
export const cartFunctions = {
    clearCart,
    getCart,
    addToCart,
    deleteFromCart,
    saveCart,
    itemQuantityCart
}
