import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import PropTypes from 'prop-types';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '@crema/core/AppTableContainer';


const PickerTable = ({PickerData}) => {
  return (
    <AppTableContainer>
      <Table stickyHeader className='table'>
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
          {PickerData.data &&  (
          PickerData.data.picker.map((data) => (
            <TableItem data={data} key={data.id} />
  ))
)}
        </TableBody>
      </Table>

    
    </AppTableContainer>
  );
};

export default PickerTable;

PickerTable.defaultProps = {
  PickerData: [],
};

PickerTable.propTypes = {
  PickerData: PropTypes.object,
  onClickOpenEdit: PropTypes.func,
  onClickOpenReject: PropTypes.func,
  onClickCloseEdit: PropTypes.func,
  onDeleteOrder: PropTypes.func,
  onClickOpenApprove: PropTypes.func,
  onClickCloseApprove: PropTypes.func,
};
