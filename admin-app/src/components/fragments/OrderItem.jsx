import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


import { Button, Typography, Grid } from '@material-ui/core';
import ProductService from '../../services/ProductService';
const useStyles = makeStyles((theme) => ({
    root: {
        height: "550px",
        width: "40%",
        backgroundColor: theme.palette.background.paper,
        border: "3px solid",
        borderColor: theme.palette.primary.light,
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        overflowY: "scroll",
        overflowX: "hidden"
    },
    buttons: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "10%"
    },
    icon: {
        backgroundColor: theme.palette.primary.dark
    },

    Btn: {
        marginLeft: "11px",
        marginRight: "11px",
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.light,
        borderColor: theme.palette.primary.dark,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.dark,
        },
    },
    details: {
        margin: "0",
        padding: "0"
    }

}));
const OrderItem = (props) => {
    const classes = useStyles();
    const [status, setStatus] = useState("")
    const [id, setId] = useState(props.item.id);
    const [quantity, setQuantity] = useState(0);

    const onCheckClick = (e, id, quantity) => {
        setId(id);
        setQuantity(quantity)
    }
    //console.log(id)
    useEffect(() => {
        ProductService.getProductById(id).then(r => {
            setQuantity(r.data.quantity - quantity);
            let s = r.data.quantity - quantity > 0 ? "Available" : "Not available"
            setStatus(s)
            console.log(r.data.quantity - quantity)
            setId(0)
            setQuantity(0)

        });
    }, [props])
    //console.log(status)
    if (props.item !== null) {
        return (
            <Grid className={classes.details} container>
                <ListItem style={{ textAlign: "center", padding: "10px" }}>
                    <Typography variant="body2">
                        {props.item.name + " - "}<strong>{"€ " + props.item.price + " "}x{" " + props.item.quantity}</strong>
                    </Typography>
                </ListItem>
            </Grid>
        )


    }
    else {
        return (
            <List className={classes.root}>
                <h2>Loading....</h2>
            </List>
        )
    }
}


export default OrderItem;