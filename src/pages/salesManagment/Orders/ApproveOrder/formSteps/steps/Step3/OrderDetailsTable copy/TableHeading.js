import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHeader from '@crema/core/AppTable/TableHeader';

const TableHeading = () => {
  return (
    <TableHeader>
      <TableCell align='left'>Product</TableCell>
      <TableCell align='left'>Unit Price</TableCell>
      <TableCell align='left'>Ordered</TableCell>
      <TableCell align='left'>Approved</TableCell>
      <TableCell align='left'>Amount</TableCell>
      <TableCell align='left'>Available</TableCell>
      <TableCell align='left'>Action</TableCell>
      <TableCell />
    </TableHeader>
  );
};

export default TableHeading;
