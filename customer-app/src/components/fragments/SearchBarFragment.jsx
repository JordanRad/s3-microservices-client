import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flex: 1,
        flexGrow: 1,
        padding: 0,
        marginTop: "2%",
        marginBottom: "2%",
        borderColor:"yellow"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width:"30%",
        color:theme.palette.primary.dark,
        [theme.breakpoints.only('xs')]: {
           width:"94%"
          },
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
        color:theme.palette.primary.dark
    },
    label:{
        fontSize:"20px",
        fontWeight:550,
        color:theme.palette.primary.dark
    }
}));

const SearchBar = (props) => {

    const [selectedCategory, setSelectedCategory] = useState("")
    const classes = useStyles();
    const handleChangeCategory = (event) => {
        setSelectedCategory(event.target.value)
        props.onSelect(event.target.value);
    };
    return (
        <Container className={classes.root}>
            <FormControl className={classes.formControl}>
                <InputLabel className={classes.label} shrink id="demo-simple-select-placeholder-label-label">
                    Category
                </InputLabel>
                <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={selectedCategory}
                    onChange={handleChangeCategory}
                    className={classes.selectEmpty}
                >
                    <MenuItem value={""}>
                        <em>All</em>
                    </MenuItem>
                    <MenuItem value={"Book"}>Books</MenuItem>
                    <MenuItem value={"Magazine"}>Magazines</MenuItem>
                    <MenuItem value={"VideoGames"}>Video Games</MenuItem>
                </Select>
            </FormControl>
        </Container>
    )
}
export default SearchBar;