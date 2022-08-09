import { CardContent, CardMedia, Typography } from '@material-ui/core';
import { Button, Card, Grid } from '@mui/material';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from "../redux/action";

class ProductsView extends Component {
  render() {
    return (
      <>
        <Grid className='grid-post'>
          {
            this.props.products.map(product =>
              < Card sx={{ maxWidth: 345 }} className="card-item" key={product.id}>
                <CardMedia
                  component="img"
                  height="194"
                  image={product.img}
                  alt="Paella dish"
                />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} className="card-description">
                      <Typography variant="body2">
                        <b>{product.name}</b><br />
                        {product.description}<br />
                        <b>Price: </b>${product.price}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" onClick={() => this.props.addToCart(product)} role="button"> ADD TO CART</Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            )}
        </Grid>
      </>
    );
  };
}
const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart(product) {
      dispatch(addToCart(product));
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductsView)
