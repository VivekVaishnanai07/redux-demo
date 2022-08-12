import { Box, FormControl, OutlinedInput } from "@material-ui/core";
import React, { useState } from "react";

import { connect } from "react-redux";
import {
  adjustItemQty,
} from "../../redux/product-redux/product-actions";

const CartItem = ({ item, adjustQty }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <div>
      <Box component="form" noValidate autoComplete="off">
        <FormControl sx={{ width: '5ch' }}>
          <OutlinedInput
            type="number"
            inputProps={{ min: 1 }}
            value={input}
            onChange={onChangeHandler} />
        </FormControl>
      </Box>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
