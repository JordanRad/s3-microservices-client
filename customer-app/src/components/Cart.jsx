import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import OrderItemFragment from './fragments/OrderItemFragment';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import {cartFunctions as cf} from '../helpers/cartFunctions';
const useStyles = makeStyles((theme) => ({
    backButton: {
        backgroundColor:theme.palette.primary.dark,
        color:theme.palette.primary.light,
        borderColor: theme.palette.primary.dark,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color:theme.palette.primary.dark,
        },
    },
    heading:{
        color:theme.palette.primary.dark,
        marginBottom:"22px",
        marginTop:"102px"
    },
}));

const Cart = (props) => {

    const classes = useStyles();

    const [cart,setCart]  = useState(cf.getCart()); 
    const refreshCartHandler = ()=>{
        setCart(cf.getCart())
        props.refreshCart()
    }
    
    //Set quantity to the ordered items
    let counter = 0;
    let order = cf.getCart()
        //Sort them by name
        .sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
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
        

    let orderItemsList, orderTotalSum;

    if (order.lenght !== 0) {
        orderItemsList = order.map((item, index) => <OrderItemFragment refreshCart={refreshCartHandler} key={index} item={item} />)
        orderTotalSum = order.reduce(((acc, item) => acc + (item.price * item.quantity)), 0).toFixed(2);
    } else {
        orderItemsList = [];
        orderTotalSum = 0.00;
    }


    return (
        <>
            <Typography className={classes.heading} variant="h4">Your Cart</Typography>
            <Button disabled={cart.length===0} variant="outlined" className={classes.backButton} href='./checkout'>Proceed to checkout</Button>
            <Grid>
                
                <List component="nav">
                    {orderItemsList}
                </List>
                <Divider />
                <ListItem>
                    <ListItemText primary={"TOTAL: €" + orderTotalSum} />
                </ListItem>
            </Grid>
        </>
    )
}

export default Cart;
