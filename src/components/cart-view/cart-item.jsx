import { Box, FormControl, OutlinedInput } from "@mui/material";
import { useState } from "react";
import { adjustItemQty } from '../redux/Shopping/shopping-actions';
import { connect } from "react-redux";

const CartItem = ({ item, adjustQty }) => {
  const [input, setInput] = useState(item);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };
  return (
    <div>
      <Box component="form" noValidate autoComplete="off">
        <FormControl sx={{ width: '9ch' }}>
          <OutlinedInput
            type="number"
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