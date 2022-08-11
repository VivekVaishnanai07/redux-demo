import { Button, Table, TableContainer, TableFooter } from '@mui/material';
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/action';
import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CartItem from './cart-item';

const CartView = ({ cart, removeFromCart }) => {
  const [totalPrice, setTotalPrice] = React.useState(0);
console.log(cart.map((data)=>data.qty))
  React.useEffect(() => {
    let price = 0;

    cart.forEach((item) => {
      price += item.qty * item.price;
    });

    setTotalPrice(price);
  }, [cart, totalPrice, setTotalPrice]);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Shopping</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((product) => (
            <TableRow key={product.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">{product.name}</TableCell>
              <TableCell >{product.description}</TableCell>
              <TableCell >
                <CartItem />
              </TableCell>
              <TableCell >${product.price}</TableCell>
              <TableCell align="right"><Button variant="outlined" color="error" onClick={() => removeFromCart(product.id)}>Remove</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell align="right"><b>Total: ${totalPrice}</b></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartView);

