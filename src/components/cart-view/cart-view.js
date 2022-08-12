import { Button, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { removeFromCart } from '../../redux/product-redux/product-actions';
import CartItem from './cart-item';


const CartView = ({ cart, removeFromCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Shopping</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item) => (
            <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row"><img src={item.img} alt="img" className='cart-img' /></TableCell>
              <TableCell component="th" scope="row">{item.name}</TableCell>
              <TableCell >{item.description}</TableCell>
              <TableCell >
                <CartItem key={item.id} item={item} />
              </TableCell>
              <TableCell >${item.price}</TableCell>
              <TableCell align="right"><Button variant="outlined" color="error" onClick={() => removeFromCart(item.id)}>Remove</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell align="right"><b>TOTAL: ({totalItems} items)</b> <br />TOTAL: $ {totalPrice}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.product.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartView);
