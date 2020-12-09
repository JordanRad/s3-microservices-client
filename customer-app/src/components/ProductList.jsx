import React ,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProductFragment from './fragments/ProductFragment';
import SearchBarFragment from './fragments/SearchBarFragment';
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

    const [category,setCategory] = useState("");

    const onSelectedOption =(selectedCategory)=>{
        setCategory(selectedCategory);
    }
    const classes = useStyles();
    useEffect(()=>{
        CommunicationService.getProducts().then((res)=>{
            console.log(res)
            setProducts(res);
        })
    },[])

    let items = products;

    //filter items based on category

   
    // Get all menuItems from menu
    const itemsList = items !== [] ? 
    items
    .filter(i=>i.category.includes(category))
    .map(item => {
        return (
            <>
                <Grid key={item.id+1000} item xs={12} sm={6} md={4}>
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
                <Grid container  spacing={5}>
                    Loading....
                </Grid>
            </div>
        )
    } else {
        return (
            <>
                <div className={classes.root}>
                    <SearchBarFragment onSelect = {onSelectedOption} />
                    <Grid container spacing={4}>
                        {itemsList}
                    </Grid>
                </div>
            </>
        )
    }
}
export default ProductList;