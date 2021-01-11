import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NavBar from '../components/NavBar';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import OrderList from '../components/OrderList';
import SearchbarFragment from '../components/fragments/SearchbarFragment'
import OrderService from '../services/OrderService';
import OrderDetails from '../components/OrderDetails'
const useStyles = makeStyles((theme) => ({
    list: {
        height: "4%",
        marginTop: "6px"
    },

}));
const CurrentOrdersPage = () => {
    const classes = useStyles();
    const [orders, setOrders] = useState(null);
    const [input, setInput] = useState("");
    const [item, setItem] = useState(null);

    useEffect(() => {
        OrderService.getAllNewAndProcessingOrders().then(r => {
            setOrders(r.data)
        })
        
    }, [])

    const onInputChangeHandler = (input) => {
        setInput(input)
    }

    const onClickHandler = (item) => {
        setItem(item);
    }
    console.log(input)
    if (orders) {
        let filtered = orders.filter(i => {
            if (i.orderNumber.toLowerCase().includes(input.toLowerCase()) || i.shippingAddress.toLowerCase().includes(input.toLowerCase())) {
                return i
            }
        })
        let order = item !== null ? item : null;
        return (
            <>
                <NavBar>
                    <Typography variant="h6">
                        Current Orders Dashboard
                  </Typography>
                </NavBar>

                <Grid className={classes.list} container justify="space-around">
                    <Grid item xs={12}>
                        <SearchbarFragment onChange={onInputChangeHandler} />
                    </Grid>
                    <OrderList onClick={onClickHandler} orders={filtered} />
                    <OrderDetails type={"order"} item={order} />
                </Grid>
            </>
        );
    } else {
        return (<>
            <NavBar>
                <Typography variant="h6">
                    Current Orders Dashboard
              </Typography>
            </NavBar>
            <Container fullwidth='true'>
                <Typography variant="h5">
                    Loading...
              </Typography>
            </Container>
        </>)
    }
}

export default CurrentOrdersPage;