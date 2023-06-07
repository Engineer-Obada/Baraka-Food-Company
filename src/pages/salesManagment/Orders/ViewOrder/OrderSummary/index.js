import React from 'react';
import AppCard from '@crema/core/AppCard';
import {Box} from '@mui/material';
import {Fonts} from 'shared/constants/AppEnums';
import Divider from '@mui/material/Divider';
import {useIntl} from 'react-intl';
import AppAnimate from '@crema/core/AppAnimate';
import PropTypes from 'prop-types';


const OrderSummary = () => {
  const {messages} = useIntl();
  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <AppCard
        title={
          <Box fontSize={16} fontWeight={Fonts.BOLD}>
            {messages['ecommerce.orderSummary']}
          </Box>
        }
      >
       
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 14,
            fontWeight: Fonts.MEDIUM,
            mb: 4,
          }}
        >
          <Box sx={{color: 'text.secondary'}}>Discount: </Box>
          <Box>$0</Box>
        </Box>
      
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 14,
            fontWeight: Fonts.MEDIUM,
            mb: 4,
          }}
        >
          <Box sx={{color: 'text.secondary'}}>Estimated Tax: </Box>
          <Box>$0</Box>
        </Box>

        <Divider />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 14,
            fontWeight: Fonts.MEDIUM,
            my: 4,
          }}
        >
          <Box sx={{color: 'text.secondary'}}>Order Total: </Box>
          <Box>$0</Box>
        </Box>
      </AppCard>
    </AppAnimate>
  );
};

export default OrderSummary;

OrderSummary.propTypes = {
  cartItems: PropTypes.array,
};
