import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.dark,
    "& .MuiTableCell-head": {
      color: "white",
      fontWeight: 525
    }
  }
}));
const TableHeader = (props) => {
  const classes = useStyles();
  if (props.type === "users") {
    return (
      <TableHead className={classes.head}>
        <TableRow className={classes.color}>
          <TableCell>User Email</TableCell>
          <TableCell align="center">User ID</TableCell>
          <TableCell align="center">&nbsp;</TableCell>
          <TableCell align="center">&nbsp;</TableCell>
        </TableRow>
      </TableHead>
    );
  } else {
    return (
      <TableHead className={classes.head}>
        <TableRow className={classes.color}>
          <TableCell>Product Name and ID</TableCell>
          <TableCell align="center">Available Quantity</TableCell>
          <TableCell align="center">&nbsp;</TableCell>
          <TableCell align="center">&nbsp;</TableCell>
        </TableRow>
      </TableHead>
    );
  }
}
export default TableHeader;