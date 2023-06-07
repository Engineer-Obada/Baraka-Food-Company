import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import OrderActions from './OrderActions';
import {styled} from '@mui/material/styles';
import Badge from '@mui/material/Badge';


const StyledTableCell = styled(TableCell)(() => ({
  fontSize: 14,
  padding: 8,
  '&:first-of-type': {
    paddingLeft: 20,
  },
  '&:last-of-type': {
    paddingRight: 20,
  },
}));
const TableItem = ({data}) => {
  return (
    <TableRow key={data.name} className='item-hover'>
      <StyledTableCell component='th' scope='row'>
      {console.log('daaat')}

        <Box
          sx={{
            color: 'primary.main',
            borderBottom: (theme) => `1px solid ${theme.palette.primary.main}`,
            display: 'inline-block',
          }}
        >
          #{data.id}
        </Box>
      </StyledTableCell>
      <StyledTableCell align='left'>{data.name}</StyledTableCell>
      <StyledTableCell align='left'>{data.price}</StyledTableCell>
      <StyledTableCell align='left'>
           <Badge sx={{
            paddingLeft:5
           }} badgeContent={data.pivot.quantity} color="primary">
    </Badge>
      </StyledTableCell>
      <StyledTableCell align='right'>
        <OrderActions />
      </StyledTableCell>
    </TableRow>
  );
};

export default TableItem;

TableItem.propTypes = {
  data: PropTypes.object,
};
