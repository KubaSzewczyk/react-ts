import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ProductsTable = ({ filteredProducts, products, handleModal }:{filteredProducts: any, products: any, handleModal: any,}) => {
  
  return (
      <>
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left"><h3>id</h3></TableCell>
            <TableCell align="left"><h3>name</h3></TableCell>
            <TableCell align="left"><h3>year</h3></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {products.filter((item: any) => {
            return !filteredProducts ? item : filteredProducts?.toString().includes(item.id)
          }).map(({id, name, year}:{id: String, name: String, year: Number}) => (
            <TableRow
              key={id.toString()}
              onClick={() => handleModal()}
            >
              <TableCell align="left">{id}</TableCell>
              <TableCell align="left">{name}</TableCell>
              <TableCell align="left">{year.toString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
      </>
)
}
export default ProductsTable