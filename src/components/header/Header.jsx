import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { connect } from "react-redux";
import Toolbar from '@mui/material/Toolbar';
import { Link } from "react-router-dom"
import Typography from '@mui/material/Typography';
import * as React from 'react';

function Header(props) {
  let selectedItems = props.cart
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className='home-btn' to="/">Home</Link>
          </Typography>
          <Button color="inherit">
            <Link className='home-btn' to="/cart-view">
              <Badge badgeContent={selectedItems.length} color="error"><ShoppingCartIcon /></Badge>
              Cart
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Header)