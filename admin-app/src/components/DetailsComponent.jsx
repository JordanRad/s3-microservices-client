import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import DescriptionIcon from '@material-ui/icons/Description';
import EuroIcon from '@material-ui/icons/Euro';
import ListIcon from '@material-ui/icons/List';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Button, Divider, Typography } from '@material-ui/core';
import ProductService from '../services/ProductService';
import ProductDialog from './fragments/ProductDialog';
const useStyles = makeStyles((theme) => ({
    root: {
        height: "550px",
        width: "40%",
        backgroundColor: theme.palette.background.paper,
        border: "3px solid",
        borderColor: theme.palette.primary.light,
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center"
    },
    buttons: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "175px"
    },
    icon: {
        backgroundColor: theme.palette.primary.dark
    },
    deleteBtn: {
        backgroundColor: "#801515",
        color: "white",
        "&:hover": {
            backgroundColor: "#ffaaaa",
            color: "black",
        }
    },
    editBtn: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.light,
        borderColor: theme.palette.primary.dark,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.dark,
        },
    }

}));
const DetailsComponent = (props) => {
    const classes = useStyles();
    const [isOpen,setIsOpen] = useState(false)
    const [type,setType] = useState("");
    const [editedItemId,setEditedItemId] = useState(-1);
    const [p,setP] = useState({})
    const openDialog = (menuId) => {
        setIsOpen(true)
        setEditedItemId(menuId)
       
    }

    const closeDialog = () => {
        setIsOpen(!isOpen)
        setEditedItemId(-1)
        setP({})
        setType("")
    }

    const onDeleteHandler = (e, id) => {
        console.log(id)
        ProductService.deleteProduct(id).then(r => console.log(r))
        window.location.reload();
    }

    //console.log(props)
    if (props.item !== null) {
        if (props.type === "order") {
            let order = props.item
            return (
                <List className={classes.root}>
                    <Typography style={{ textAlign: "center" }} variant="h4">
                        {order.orderNumber}
                    </Typography>
                    <Typography style={{ textAlign: "center" }} variant="body1">
                        {order.shippingAddress}
                    </Typography>
                    <ListItem >
                        <ListItemAvatar >
                            <Avatar className={classes.icon}>
                                <DescriptionIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <Typography variant="body2">
                            n
                        </Typography>
                    </ListItem>
                    <Divider />
                    <ListItem >
                        <ListItemAvatar >
                            <Avatar className={classes.icon}>
                                <EuroIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={""} />
                    </ListItem>
                    <Divider />
                    <ListItem >
                        <ListItemAvatar >
                            <Avatar className={classes.icon}>
                                <ListIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={""} />
                    </ListItem>
                    <Divider />
                    <Divider />
                    <ListItem className={classes.buttons} >
                        <Button size="large" className={classes.editBtn}>Edit</Button>
                        <Button onDoubleClick={(e) => onDeleteHandler(e, order.orderNumber)} size="large" className={classes.deleteBtn}>Delete</Button>
                    </ListItem>
                </List>
            );
        } else {
            let product = props.item
           console.log(product)
            return (
                <List className={classes.root}>
                    <ProductDialog type = {type} closeDialog={closeDialog} isOpen={isOpen} product = {product}/>
                    <Typography style={{ textAlign: "center" }} variant="h4">
                        {product.name}
                    </Typography>
                    <Typography style={{ textAlign: "center" }} variant="body1">
                        {product.description ? product.description : '\xa0'}
                    </Typography>
                    <ListItem >
                        <ListItemAvatar >
                            <Avatar className={classes.icon}>
                                <DescriptionIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <Typography variant="body2">
                            {product.detailedDescription.substring(0, 50) + "..."}
                        </Typography>
                    </ListItem>
                    <Divider />
                    <ListItem >
                        <ListItemAvatar >
                            <Avatar className={classes.icon}>
                                <EuroIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={product.price} />
                    </ListItem>
                    <Divider />
                    <ListItem >
                        <ListItemAvatar >
                            <Avatar className={classes.icon}>
                                <ListIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={product.category} />
                    </ListItem>
                    <Divider />
                    <ListItem >
                        <ListItemAvatar >
                            <Avatar className={classes.icon}>
                                {product.quantity > 0 ? <AddIcon /> : <RemoveIcon />}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={"Available quantity: " + product.quantity} />
                    </ListItem>
                    <Divider />
                    <ListItem className={classes.buttons} >
                        <Button onClick={(e)=>{
                            setIsOpen(!isOpen)
                            setEditedItemId(product.id)
                            setType("EDIT")
                            setP(product);

                        }} size="large" className={classes.editBtn}>Edit</Button>
                        <Button 
                        onClick={(e)=>{
                            setIsOpen(!isOpen)
                            setEditedItemId(product.id)
                            setType("DELETE")
                            setP(product);
                        }}
                        onDoubleClick={(e) => onDeleteHandler(e, product.id)} size="large" className={classes.deleteBtn}>Delete</Button>
                    </ListItem>
                </List>
            );
        }
    }
    else {
        return (
            <List className={classes.root}>
                <Typography style={{ textAlign: "center" }} variant="h5">
                    Select an item
                </Typography>
            </List>
        )
    }
}
export default DetailsComponent;