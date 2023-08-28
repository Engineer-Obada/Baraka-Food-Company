import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
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
const TableItem = ({
  data
}) => {


  return (
    <TableRow key={data.id} className='item-hover'>
      <StyledTableCell component='th' scope='row'>
        <Box
          sx={{
            color: 'primary.main',
            borderBottom: (theme) => `1px solid ${theme.palette.primary.main}`,
            display: 'inline-block',
          }}
        >
          {data.firstName}
        </Box>
      </StyledTableCell>
      {/* <StyledTableCell align='left'>{data.product}</StyledTableCell> */}
      
      <StyledTableCell align='left'>
        <Box
        sx={{
          width:'50%',
          padding:'3px',
          textAlign:'center',
          color:'black',
          border:'1px solid #0a8fdc',
          borderRadius:'5px'
        }}
        >
        {data.countOrders}
        </Box>
        </StyledTableCell>
     
      <TableCell align='right'>

      </TableCell>
    </TableRow>
  );
};

export default TableItem;

TableItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClickOpenEdit: PropTypes.func,
  onClickOpenReject: PropTypes.func,
  onDeleteOrder: PropTypes.func,
  onClickOpenApprove: PropTypes.func,
};
