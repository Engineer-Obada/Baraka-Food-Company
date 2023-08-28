import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHeader from '@crema/core/AppTable/TableHeader';

const TableHeading = () => {
  return (
    <TableHeader>
      <TableCell align='left'>Shiper Name</TableCell>
      <TableCell align='left'>Total Cases	</TableCell>
    </TableHeader>
  );
};

export default TableHeading;
