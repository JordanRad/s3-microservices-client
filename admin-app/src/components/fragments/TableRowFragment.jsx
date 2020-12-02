import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
const TableRowFragment = (props) => {
    return ( 
        <TableRow key={props.name}>
              <TableCell component="th" scope="row">
                {props.name}
              </TableCell>
              <TableCell align="center">{props.second}</TableCell>
              <TableCell align="center">{props.edit}</TableCell>
              <TableCell align="center">{props.remove}</TableCell>
            </TableRow>
     );
}
 
export default TableRowFragment;
