import React ,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProductFragment from './fragments/ProductFragment';
import CommunicationService from '../services/CommunicationService';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: "2%"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const ProductList = (props) => {
    // Get order from global state
    const [products, setProducts] = useState([])
    const classes = useStyles();
    useEffect(()=>{
        CommunicationService.getProducts().then((res)=>{
            console.log(res)
            setProducts(res);
        })
    },[])

    // Get all menuItems from menu
    const itemsList = products !== [] ? products.map(item => {
        return (
            <>
                <Grid key={item.id+1000} item xs={6} sm={4} md={3}>
                    <ProductFragment
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        key={item.id+100}
                        id={item.id}
                        available={item.quantity >= 1}
                        refreshCart={props.refreshCart}
                    />
                </Grid>
            </>
        )
    }) : null;
    if (products === []) {
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    Loading....
                </Grid>
            </div>
        )
    } else {
        return (
            <>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {itemsList}
                    </Grid>
                </div>
            </>
        )
    }
}
export default ProductList;