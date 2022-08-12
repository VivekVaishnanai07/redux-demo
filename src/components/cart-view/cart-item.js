import { FormControl, OutlinedInput } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { adjustItemQty } from "../../redux/product-redux/product-actions";

const CartItem = ({ item, adjustQty }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };
  return (
    <FormControl sx={{ width: '7ch' }} variant="outlined">
      <OutlinedInput
        type='number'
        value={input}
        onChange={onChangeHandler}
      />
    </FormControl>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
