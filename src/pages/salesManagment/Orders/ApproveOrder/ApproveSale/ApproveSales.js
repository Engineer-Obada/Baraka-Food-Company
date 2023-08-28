
import { Box   } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import OrderDetails from './ApproveSales/index';



const ApproveSales = ({orderId,isOpenApproveSale,onClickCloseApproveSale,reCallAPI}) => {
 
  return (

    <Box 
    sx={{
      paddingBottom:"10px"
    }}
    >
    <OrderDetails reCallAPI={reCallAPI} orderId={orderId} isOpenApproveSale={isOpenApproveSale} onClickCloseApproveSale={onClickCloseApproveSale}/>
   
    </Box>
  );
};

export default ApproveSales;
ApproveSales.propTypes = {
  orderId: PropTypes.number,
  isOpenApproveSale: PropTypes.bool,
  onClickCloseApproveSale: PropTypes.bool,
  reCallAPI: PropTypes.func,
 
};