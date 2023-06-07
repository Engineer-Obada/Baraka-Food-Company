import React from 'react';
import {TableCell} from '@mui/material';
import TableHeader from '@crema/core/AppTable/TableHeader';

const TableHeading = () => {
  return (
    <TableHeader>
      <TableCell align='left'>No</TableCell>
      <TableCell align='left'>Product</TableCell>
      <TableCell align='left'>Price</TableCell>
      <TableCell align='left'>Quantity</TableCell>
      <TableCell align='right'>Action</TableCell>
    </TableHeader>
  );
};

export default TableHeading;
