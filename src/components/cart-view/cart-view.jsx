import { Button, Table, TableContainer, TableFooter } from '@mui/material';
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/action';
import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CartView = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Shopping</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.cart.map((product) => (
            <TableRow key={product.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">{product.name}</TableCell>
              <TableCell >{product.description}</TableCell>
              <TableCell >${product.price}</TableCell>
              <TableCell align="right"><Button variant="outlined" color="error" onClick={() => props.removeFromCart(product)}>Remove</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell align="right"><b>Total: ${props.cart.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0)}</b></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
  // }
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart(product) {
      dispatch(removeFromCart(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartView);

