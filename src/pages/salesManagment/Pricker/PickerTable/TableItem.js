import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import OrderActions from './OrderActions';
import {styled} from '@mui/material/styles';
import Progres from '../Progres/Progres'
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
  data,
  onClickOpenEdit,
  onClickOpenReject,
  onDeleteOrder,
  onClickOpenApprove
}) => {
  const getPaymentStatusColor = () => {
    switch (data.pickerStatus) {
      case 'Completed': {
        return '#43C888';
      }
      case 'binding': {
        return '#F84E4E';
      }
      default: {
        return '#43C888';
      }
    }
  };

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
          #SK{data.id}
        </Box>
      </StyledTableCell>
      {/* <StyledTableCell align='left'>{data.product}</StyledTableCell> */}
      <StyledTableCell align='left'>{"8/14/2023"}</StyledTableCell>
      <StyledTableCell align='left'>{data.picker.firstName}</StyledTableCell>
      <StyledTableCell align='left'>{data.customer.firstName}</StyledTableCell>
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
        {data.pickedQuantity}/{data.approvedQuantity}
        </Box>
        </StyledTableCell>
      <StyledTableCell align='left'><Progres prog={data.progress} /></StyledTableCell>
      <StyledTableCell align='left'>3h 44m 18s </StyledTableCell>
      <StyledTableCell align='left'>
        <Box
          sx={{
            color: getPaymentStatusColor(),
            backgroundColor: getPaymentStatusColor() + '44',
            padding: '3px 5px',
            borderRadius: 1,
            fontSize: 14,
            display: 'inline-block',
          }}
        >
          {/* {data.status} */}
          {data.pickerStatus}
        </Box>
      </StyledTableCell>
      <TableCell align='right'>

        <OrderActions  ///////////////////////////////////// OrderAction
        onClickOpenEdit={onClickOpenEdit}
        onClickOpenReject={onClickOpenReject}
        onDeleteOrder={onDeleteOrder}
        onClickOpenApprove={onClickOpenApprove}
        data={data}
        />
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
