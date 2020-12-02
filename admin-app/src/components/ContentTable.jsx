import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableRowFragment from './fragments/TableRowFragment';
import Button from '@material-ui/core/Button';
import SearchbarFragment from './fragments/SearchbarFragment';
const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
        width: '100%'
    },
    outer: {
        width: '100%',
    },
    editBtn: {
        backgroundColor: theme.palette.primary.dark,
        color: "white",
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: "black"
        }
    },
    deleteBtn: {

        backgroundColor:"#801515",
        color: "white",
        '&:hover': {
            backgroundColor: "#FFAAAA",
            color: "black"
        }

    }
}));

function createData(name, second, edit, remove) {
    return { name, second, edit, remove };
}


const ContentTable= (props)=> {
    const classes = useStyles();
    const [input,setInput] = useState("");

    const onChangeHandler =(e)=>{
        setInput(e.target.value)
    }
    let rows = [
        createData('Frozen yoghurt', 6.0, <Button className={classes.editBtn}>Edit</Button>, <Button className={classes.deleteBtn}>Delete</Button>),
        createData('Ice cream sandwich', 9.0, <Button className={classes.editBtn}>Edit</Button>, <Button className={classes.deleteBtn}>Delete</Button>),
        createData('Eclair', 16.0, <Button className={classes.editBtn}>Edit</Button>, <Button className={classes.deleteBtn}>Delete</Button>),
        createData('Cupcake', 3.7,<Button className={classes.editBtn}>Edit</Button>, <Button className={classes.deleteBtn}>Delete</Button>),
    ]
    console.log(input)
    return (
        <>
        <SearchbarFragment onChange={onChangeHandler}/>
        <TableContainer className={classes.outer} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                {props.children}
                <TableBody>
                    {rows.map((row,index) => (
                        <TableRowFragment
                            key={index}
                            name={row.name}
                            second={row.second}
                            edit={row.edit}
                            remove={row.remove} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
}

export default ContentTable;