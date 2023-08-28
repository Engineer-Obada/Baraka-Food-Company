import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '@crema/core/AppTableContainer';
import PropTypes from 'prop-types';
import { useGetDataApi } from '@crema/utility/APIHooks';
import { baseURL } from '@crema/services/ApiConfig';

const OrderDetailsTable = ({orderId,isOpenNote,onClickOpenNote}) => {
  const [{apiData},{reCallAPI}] = useGetDataApi(`${baseURL}/api/order/edit/${orderId}`,[]);
  return (
    <AppTableContainer>
      
      <Table stickyHeader className='table'>
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
          {console.log('aaaaa',apiData)}
          {apiData.data && apiData.data.map((data) => (
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
  cartItems: PropTypes.object,
  setTableData: PropTypes.func,
  handleMessage: PropTypes.func,
  onClickOpenNote: PropTypes.func,
  orderId: PropTypes.number,
  isOpenNote: PropTypes.bool,
};
