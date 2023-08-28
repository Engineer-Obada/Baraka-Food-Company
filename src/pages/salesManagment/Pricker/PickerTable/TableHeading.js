import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHeader from '@crema/core/AppTable/TableHeader';

const TableHeading = () => {
  return (
    <TableHeader>
      <TableCell align='left'>Order Num</TableCell>
      <TableCell align='left'>Assigned Date</TableCell>
      <TableCell align='left'>Picker Name</TableCell>
      <TableCell align='left'>Customer</TableCell>
      <TableCell align='left'>Total Cases	</TableCell>
      <TableCell align='left'>Progress</TableCell>
      <TableCell align='left'>Period</TableCell>
      <TableCell align='left'>Status</TableCell>
      <TableCell align='right'>Actions</TableCell>
    </TableHeader>
  );
};

export default TableHeading;
