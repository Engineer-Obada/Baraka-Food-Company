import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import PropTypes from 'prop-types';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '@crema/core/AppTableContainer';


const OrderTable = ({
  orderData,
  onClickOpenEdit,
  onClickCloseEdit,
  onClickOpenReject,
  onDeleteOrder,
  onClickCloseApprove,
  onClickOpenApprove,
  onClickOpenApprovSale,
  onClickCloseApproveSale,
  onClickOpenApprovWarehous,
  onClickOpenApprovWarehousfinal
}) => {
  return (
    <AppTableContainer>
      <Table stickyHeader className='table'>
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
          {orderData.data && orderData.data.map((data) => (
            <TableItem 
            onClickOpenApprovWarehous={onClickOpenApprovWarehous}
            onClickOpenApprovWarehousfinal={onClickOpenApprovWarehousfinal}
            onClickOpenApprovSale={onClickOpenApprovSale}
            onClickCloseApproveSale={onClickCloseApproveSale}
            onDeleteOrder={onDeleteOrder}
            onClickOpenReject={onClickOpenReject}
            onClickOpenEdit={onClickOpenEdit}
            onClickCloseEdit={onClickCloseEdit}
            onClickOpenApprove={onClickOpenApprove}
            onClickCloseApprove={onClickCloseApprove}
            data={data} key={data.id} />
          ))}
        </TableBody>
      </Table>

    
    </AppTableContainer>
  );
};

export default OrderTable;

OrderTable.defaultProps = {
  orderData: [],
};

OrderTable.propTypes = {
  orderData: PropTypes.array,
  onClickOpenEdit: PropTypes.func,
  onClickCloseApproveSale: PropTypes.func,
  onClickOpenApprovSale: PropTypes.func,
  onClickOpenReject: PropTypes.func,
  onClickCloseEdit: PropTypes.func,
  onDeleteOrder: PropTypes.func,
  onClickOpenApprove: PropTypes.func,
  onClickCloseApprove: PropTypes.func,
  onClickOpenApprovWarehous: PropTypes.func,
  onClickOpenApprovWarehousfinal: PropTypes.func,
};
