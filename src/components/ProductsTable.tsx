import styled from 'styled-components'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { ProductItem } from '../pages/Home/useHomeLogic';

const StyledTableRow = styled(TableRow)`
  position: relative;
  cursor: pointer;
  background-color: ${({color}) => color};
`
export type ProductTableItem = Pick<ProductItem, 'id' | 'name' | 'year' | 'color' | 'pantone_value'>
interface ProductsTableProps {
filteredProduct: number, products: ProductItem[], handleModal: (product: ProductTableItem) => void
}

const ProductsTable = ({ filteredProduct, products, handleModal }: ProductsTableProps) => {
  
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
            {products.filter((item: ProductItem) => {              
            return !filteredProduct ? item : filteredProduct === item.id
          }).map(({id, name, year, color, pantone_value}:ProductTableItem) => (
            <StyledTableRow
              key={id}
              onClick={() => handleModal(({ id, name, year, color, pantone_value }))}
              color={color}
            >
              <TableCell align="left">{id}</TableCell>
              <TableCell align="left">{name}</TableCell>
              <TableCell align="left">{year}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
      </>
)
}
export default ProductsTable