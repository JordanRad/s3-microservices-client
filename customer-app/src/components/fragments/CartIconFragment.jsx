import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    buttonColor: {
        color: theme.palette.secondary.main,
        '&:hover': {
            color: theme.palette.primary.main,
            textDecoration: 'none',
        }
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(4),
    },
    buttons: {
        marginLeft: "auto",
        padding: "20px",
    },
    backButton:{
        border:"2px",
        borderColor:"white",
        borderRadius:"15px",
        color: theme.palette.secondary.main,
        '&:hover': {
            color: theme.palette.primary.main,
            textDecoration: 'none',
        }
    }


}));
const CartIconFragment = (props) => {
    const classes = useStyles();
    if (!window.location.href.includes("cart")) {
        return (
            <div className={classes.buttons}>
                <Link to={'./cart'} className={classes.buttonColor}>
                    <Badge className={classes.hover} color="secondary" badgeContent={props.cart.length!==0?props.cart.length:"0"}>
                        <ShoppingCartIcon fontSize="large" />
                    </Badge>
                </Link>
            </div>
        );
    } else {
        return (
            <div className={classes.buttons}>
                <Link to={'./'} className={classes.backButton}>
                    <FormatListBulletedIcon fontSize="large"/>
                 </Link>
            </div>
        );
    }


}

export default CartIconFragment;