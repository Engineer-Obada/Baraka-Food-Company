import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '@crema/core/AppTableContainer';
import PropTypes from 'prop-types';

const OrderDetailsTable = ({cartItems,reCallAPI,orderId,isOpenNote,onClickOpenNote}) => {
  return (
    <AppTableContainer>
      
      <Table stickyHeader className='table'>
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
          {cartItems && cartItems.data.map((data) => (
            <TableItem 
            onClickOpenNote={onClickOpenNote}
            isOpenNote={isOpenNote}
            orderId={orderId}
             data={data}
             key={data.id}
             reCallAPI={reCallAPI}/>
          ))}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default OrderDetailsTable;

OrderDetailsTable.propTypes = {
  cartItems: PropTypes.array,
  setTableData: PropTypes.func,
  reCallAPI: PropTypes.func,
  onClickOpenNote: PropTypes.func,
  orderId: PropTypes.number,
  isOpenNote: PropTypes.bool,
};
