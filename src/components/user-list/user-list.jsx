import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core"
import { connect, useSelector } from "react-redux"
import { apiUserData } from "../../redux/user-list-redux/user-list-reducer"
import Paper from '@mui/material/Paper';

function GetUserList() {
  const userData = useSelector(state => state.user.users)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell >FirstName</TableCell>
            <TableCell >LastName</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((user, index) => (
            <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">{index + 1}</TableCell>
              <TableCell >{user.firstName}</TableCell>
              <TableCell >{user.lastName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    apiUserData: () => dispatch(apiUserData())
  }
}
export default connect(null, mapDispatchToProps)(GetUserList);