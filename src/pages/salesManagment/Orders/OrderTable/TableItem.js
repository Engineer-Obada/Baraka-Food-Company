import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import OrderActions from './OrderActions';
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
  data,
  onClickOpenEdit,
  onClickOpenReject,
  onDeleteOrder,
  onClickOpenApprove,
  onClickOpenApprovSale,
  onClickOpenApprovWarehous,
  onClickOpenApprovWarehousfinal,
}) => {
  const getPaymentStatusColor = () => {
    switch (data.currentStatus) {
      case 'reject': {
        return '#F84E4E';
      }
      case 'Delivered': {
        return '#43C888';
      }
      default: {
        return '#E2A72E';
      }
    }
  };
  const timestamp = data.customer.created_at;
  const date = new Date(timestamp);
  const localDateString = date.toLocaleDateString();

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
      <StyledTableCell align='left'>{data.customer.firstName}</StyledTableCell>
      <StyledTableCell align='left'>{localDateString}</StyledTableCell>
      <StyledTableCell align='left'>{data.totalAmount}</StyledTableCell>
      <StyledTableCell align='left'>{data.customer.paymentMethod}</StyledTableCell>
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
          {data.currentStatus}
        </Box>
      </StyledTableCell>
      <TableCell align='right'>

        <OrderActions  ///////////////////////////////////// OrderAction
        onClickOpenEdit={onClickOpenEdit}
        onClickOpenReject={onClickOpenReject}
        onDeleteOrder={onDeleteOrder}
        onClickOpenApprove={onClickOpenApprove}
        onClickOpenApprovSale={onClickOpenApprovSale}
        data={data}
        onClickOpenApprovWarehous={onClickOpenApprovWarehous}
        onClickOpenApprovWarehousfinal={onClickOpenApprovWarehousfinal}
        />
      </TableCell>
    </TableRow>
  );
};

export default TableItem;

TableItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClickOpenEdit: PropTypes.func,
  onClickOpenApprovSale: PropTypes.func,
  onClickOpenReject: PropTypes.func,
  onDeleteOrder: PropTypes.func,
  onClickOpenApprove: PropTypes.func,
  onClickOpenApprovWarehous: PropTypes.func,
  onClickOpenApprovWarehousfinal: PropTypes.func,
};
