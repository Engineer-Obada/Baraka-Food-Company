import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import PropTypes from 'prop-types';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '@crema/core/AppTableContainer';


const PickerTable = ({
  PickersData,
  onClickOpenEdit,
  onClickCloseEdit,
  onClickOpenReject,
  onDeleteOrder,
  onClickCloseApprove,
  onClickOpenApprove
}) => {
  return (
    <AppTableContainer>
      <Table stickyHeader className='table'>
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
          {PickersData.data && PickersData.data.map((data) => (
            <TableItem 
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

export default PickerTable;

PickerTable.defaultProps = {
  PickersData: [],
};

PickerTable.propTypes = {
  PickersData: PropTypes.array,
  onClickOpenEdit: PropTypes.func,
  onClickOpenReject: PropTypes.func,
  onClickCloseEdit: PropTypes.func,
  onDeleteOrder: PropTypes.func,
  onClickOpenApprove: PropTypes.func,
  onClickCloseApprove: PropTypes.func,
};
