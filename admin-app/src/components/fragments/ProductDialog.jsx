import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ProductService from '../../services/ProductService';
import { useParams } from 'react-router-dom';
const createProduct = (product) => {
    return ProductService.createProduct(product);
}

const updateProduct = (item) => {
    console.log(item)
    return ProductService.updateProduct(item)

}
const deleteProduct = (itemId) => {
    return ProductService.deleteProduct(itemId)
}
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function MenuItemDialog(props) {
    const classes = useStyles();
    const { id } = useParams();
    const [open, setOpen] = useState(props.isOpen);
    const [product, setProduct] = useState({})
    const [updatedProduct, setUpdatedProduct] = useState({});

    useEffect(() => {
        props.product !== null ? setProduct(props.product) : setProduct({});
    }, [props.product])

    useEffect(() => {
        props.isOpen ? setOpen(true) : setOpen(false)
    }, [props.isOpen])


    const handleClose = () => {
        // setProduct({})
        //setCategory("")
        setProduct({})
        props.closeDialog();
    };


    const onCreate = (e) => {
        console.log(updatedProduct)
        createProduct(updatedProduct).then(r=>r.data.includes("added")?window.location.reload() : console.log(r))
    }
    const onSaveChanges = (e) => {
        //
        let updated = updatedProduct;

        if (updated.hasOwnProperty("name")) {
            updated.name = updatedProduct.name
        } else {
            updated.name = product.name
        }
        if (updated.hasOwnProperty("price")) {
            updated.price = updatedProduct.price
        } else {
            updated.price = product.price
        }
        if (updated.hasOwnProperty("description")) {
            updated.description = updatedProduct.description
        } else {
            updated.description = product.description
        }
        if (updated.hasOwnProperty("quantity")) {
            updated.quantity = updatedProduct.quantity
        } else {
            updated.quantity = product.quantity
        }
        if (updated.hasOwnProperty("id")) {
            updated.id = updatedProduct.id
        } else {
            updated.id = product.id
        }
        console.log(updated)
        updateProduct(updated).then((r) => window.location.reload());
        setProduct({})
        //props.closeDialog();
    }
    const onDeleteClick = (e) => {
        deleteProduct(product.id).then((r) => window.location.reload());

    }
    console.log(props.product)
    if (props.type === "CREATE") {
        return (<div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create New Product</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Here you can add new product
</DialogContentText>
                    <TextField
                        id="name"
                        size="small"
                        variant="outlined"
                        margin="normal"
                        required
                        helperText="product name"
                        defaultValue={product.name}
                        autoFocus
                        onChange={(e) => {
                            let name = e.target.value;
                            let p = product;
                            p.name = name
                            setUpdatedProduct(p);
                        }}
                    />
                    <TextField
                        id="desc"
                        size="small"
                        variant="outlined"
                        margin="normal"
                        required
                        helperText="product description"
                        defaultValue={product.description}
                        autoFocus
                        onChange={(e) => {
                            let desc = e.target.value;
                            let p = product;
                            p.description = desc
                            setUpdatedProduct(p);
                        }} />
                        <TextField
                        id="cat"
                        size="small"
                        variant="outlined"
                        margin="normal"
                        required
                        helperText="category(Video Games,Book,Magazine)"
                        defaultValue={product.description}
                        autoFocus
                        onChange={(e) => {
                            let cat;
                            let p = product;
                            cat = e.target.value
                            p.category=cat
                            setUpdatedProduct(p);
                        }} />
                    <TextField
                        id="price"
                        size="small"
                        variant="outlined"
                        margin="normal"
                        required
                        helperText="product price"
                        defaultValue={product.price}
                        autoFocus
                        onChange={(e) => {
                            let price = e.target.value;
                            let p = product;
                            p.price = price
                            setUpdatedProduct(p);
                        }}
                    />
                    <TextField
                        id="quantity"
                        size="small"
                        variant="outlined"
                        margin="normal"
                        required
                        helperText="product quantity in stock"
                        defaultValue={product.quantity}
                        autoFocus
                        onChange={(e) => {
                            let quantity = e.target.value;
                            let p = product;
                            p.quantity = quantity
                            setUpdatedProduct(p);
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" style={{
                        backgroundColor: "#801515",
                        color: "white",
                        "&:hover": {
                            backgroundColor: "#ffaaaa",
                            color: "black",
                        }
                    }}>
                        Exit
</Button>
                    <Button onClick={onCreate} variant="contained" color="primary">
                        Create Product
</Button>
                </DialogActions>
            </Dialog>
        </div>)
    }
    else if (product.hasOwnProperty("name") && props.type === "EDIT") {
        return (
            <div>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Edit Product's Details</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Here you can modify selected product
          </DialogContentText>
                        <TextField
                            id="name"
                            size="small"
                            variant="outlined"
                            margin="normal"
                            required
                            helperText="product name"
                            defaultValue={product.name}
                            autoFocus
                            onChange={(e) => {
                                let name = e.target.value;
                                let p = product;
                                p.name = name
                                setUpdatedProduct(p);
                            }}
                        />
                        <TextField
                            id="desc"
                            size="small"
                            variant="outlined"
                            margin="normal"
                            required
                            helperText="product description"
                            defaultValue={product.description}
                            autoFocus
                            onChange={(e) => {
                                let desc = e.target.value;
                                let p = product;
                                p.description = desc
                                setUpdatedProduct(p);
                            }} />
                        <TextField
                            id="price"
                            size="small"
                            variant="outlined"
                            margin="normal"
                            required
                            helperText="product price"
                            defaultValue={product.price}
                            autoFocus
                            onChange={(e) => {
                                let price = e.target.value;
                                let p = product;
                                p.price = price
                                setUpdatedProduct(p);
                            }}
                        />
                        <TextField
                            id="quantity"
                            size="small"
                            variant="outlined"
                            margin="normal"
                            required
                            helperText="product quantity in stock"
                            defaultValue={product.quantity}
                            autoFocus
                            onChange={(e) => {
                                let quantity = e.target.value;
                                let p = product;
                                p.quantity = quantity
                                setUpdatedProduct(p);
                            }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} variant="contained" style={{
                            backgroundColor: "#801515",
                            color: "white",
                            "&:hover": {
                                backgroundColor: "#ffaaaa",
                                color: "black",
                            }
                        }}>
                            Exit
          </Button>
                        <Button onClick={onSaveChanges} variant="contained" color="primary">
                            Save Changes
          </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    } else if (product.hasOwnProperty("name") && props.type === "DELETE") {
        console.log(props)
        return (
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Are you sure you want to delete <strong>{product.name}</strong> from the storage?</DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" color="primary">
                        Exit
                    </Button>
                    <Button onClick={onDeleteClick} variant="contained" style={{
                        backgroundColor: "#801515",
                        color: "white",
                        "&:hover": {
                            backgroundColor: "#ffaaaa",
                            color: "black",
                        }
                    }}>
                        Delete
                     </Button>
                </DialogActions>
            </Dialog>
        )
    }
    else {
        return (
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogContent>
                    <DialogContentText>Loading...</DialogContentText>
                </DialogContent>
            </Dialog>
        )
    }
}