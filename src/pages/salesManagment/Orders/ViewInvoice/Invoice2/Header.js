import React from 'react';
import {Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import IntlMessages from '@crema/utility/IntlMessages';
import {Fonts} from 'shared/constants/AppEnums';
import logo from './ItemList/logo192.png'
import PropTypes from 'prop-types';

const Header = ({cartItems}) => {
  const myStyle = {
   width:'20%',
  };
  return (
    <Box
      sx={{
        pt: 2,
        pb: {xs: 6, sm: 8, xl: 10},
        mb: {xl: 8},
      }}
    >
      <Box
        sx={{
          mb: 8,
          textAlign: 'center',
          '& svg': {
            height: 80,
            width: {
              xs: 60,
              sm: 100,
            },
          },
        }}
      >
        <img src={logo}  style={myStyle} alt='Invoice'/>

      </Box>

      <Box
        sx={{
          mx: -3,
          color: 'text.secondary',
          display: 'flex',
          flexDirection: {xs: 'column', sm: 'row'},
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        <Box
          sx={{
            px: 3,
            mb: 3,
            textAlign: {xs: 'center', sm: 'left'},
            minWidth: 200,
          }}
        >
          <Box
            sx={{
              color: 'text.secondary',
              mb: 1,
              fontWeight: Fonts.BOLD,
              fontSize: 16,
            }}
          >
            {"Baraka"}
          </Box>
          <Typography component='p' sx={{mb: 1}}>
            {cartItems.data.customer.city}
          </Typography>
          <Typography component='p' sx={{mb: 1}}>
            {/* {cartItems.data.customer.address} */}
          </Typography>
          <Typography component='p' sx={{mb: 1}}>
            Phone: {cartItems.data.customer.phoneNum}
          </Typography>
        </Box>
        <Box
          sx={{
            px: 3,
            mb: 3,
            textAlign: 'center',
            minWidth: 200,
          }}
        >
          <Box
            component='h3'
            sx={{
              fontSize: 16,
              color: 'text.secondary',
              mb: 1,
              fontWeight: Fonts.BOLD,
            }}
          >
            <IntlMessages id='invoice.client' />
          </Box>
          <Typography component='p' sx={{mb: 1}}>
            {cartItems.data.customer.firstName}
          </Typography>
          <Typography component='p' sx={{mb: 1}}>
            {cartItems.data.customer.email}
          </Typography>
        </Box>

        <Box
          sx={{
            px: 3,
            mb: 3,
            textAlign: {xs: 'center', sm: 'right'},
            minWidth: 200,
          }}
        >
          <Box
            component='h3'
            sx={{
              mb: 1,
              color: 'text.secondary',
              fontWeight: Fonts.BOLD,
              fontSize: 16,
            }}
          >
            <IntlMessages id='invoice.invoice' />
          </Box>
          <Typography component='p' sx={{mb: 1, fontWeight: Fonts.MEDIUM}}>
            <IntlMessages id='invoice.id' />: {cartItems.data.invoice.orderId}
          </Typography>
          <Typography component='p' sx={{mb: 1}}>
            <IntlMessages id='invoice.issued' />: {cartItems.data.invoice.created_at}
          </Typography>
          <Typography component='p' sx={{mb: 1, fontWeight: Fonts.MEDIUM}}>
            <IntlMessages id='invoice.dueOn' />: {"08/14/2023"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
Header.propTypes = {
  cartItems: PropTypes.object.isRequired,
};
