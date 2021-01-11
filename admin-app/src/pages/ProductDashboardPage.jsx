import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NavBar from '../components/NavBar';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import ProductService from '../services/ProductService';
import ProductList from '../components/ProductList';
import DetailsComponent from '../components/DetailsComponent';
import SearchbarFragment from '../components/fragments/SearchbarFragment'
import { Details } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    list: {
        height: "4%",
        marginTop: "6px"
    },

}));
const ProductDashBoardPage = () => {
    const classes = useStyles();
    const [products, setProducts] = useState(null);
    const [input, setInput] = useState("");
    const [item,setItem] = useState(null);
    useEffect(() => {
        ProductService.getAllProducts()
            .then(r => setProducts(r.data))
    }, [])

    const onInputChangeHandler = (input) => {
        setInput(input)
    }

    const onClickHandler = (item)=>{
        setItem(item);
    }
    //console.log(item)
    if (products === null) {
        return (
            <>
                <NavBar>
                    <Typography variant="h6">
                        Products Dashboard
                  </Typography>
                </NavBar>
                <Container fullwidth='true'>
                    <Typography variant="h5">
                        Loading...
                  </Typography>
                </Container>
            </>
        )
    } else {
        let filtered = products.filter(i => i.name.toLowerCase().includes(input.toLowerCase()))
        let product = item!==null?item:null;
        return (
            <>
                <NavBar>
                    <Typography variant="h6">
                        Products Dashboard
                  </Typography>
                </NavBar>

                <Grid className={classes.list} container justify="space-around">
                    <Grid item xs={12}>
                        <SearchbarFragment onChange={onInputChangeHandler} />
                    </Grid>

                    <ProductList onClick={onClickHandler} items={filtered} />
                    <DetailsComponent type={"product"} item={product} />
                </Grid>
            </>
        );
    }
}

export default ProductDashBoardPage;