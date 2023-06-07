import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import PropTypes from 'prop-types';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '@crema/core/AppTableContainer';

const StockTable = ({product} ) => {

  return (
    <AppTableContainer>
      <Table stickyHeader className='table'>
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
  {
      product.data.map((data) => 
        <TableItem data={data} key={data.id} />
        
     
    )

    }
</TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default StockTable;

StockTable.defaultProps = {
  product: [],
};

StockTable.propTypes = {
  product: PropTypes.array,
};
