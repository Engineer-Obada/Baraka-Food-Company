import React, { useEffect }   from 'react';
import {Box, Grid} from '@mui/material';
import AppCard from '@crema/core/AppCard';
import IntlMessages from '@crema/utility/IntlMessages';
import {Fonts} from 'shared/constants/AppEnums';

import AppAnimate from '@crema/core/AppAnimate';
import AppGridContainer from '@crema/core/AppGridContainer';
import {useGetDataApi} from '@crema/utility/APIHooks';
import OrderSummary from './OrderSummary';
import OrderInformation from './OrderInformation';
// import PaymentInfo from './PaymentInfo';
import OrderDetails from './OrderDetail';
import { baseURL } from '@crema/services/ApiConfig';
import { useParams } from 'react-router-dom';
// import { baseURL } from '@crema/services/ApiConfig';

const ViewOrder = () => {
  const {id} = useParams();
  const [{apiData: cartItems},{setQueryParams}] = useGetDataApi(`${baseURL}/api/order/view/${id}`, []); /*api/order/view/:id*/
  console.log('dddd',id);
  useEffect(() => {

    setQueryParams({id: id});
  }, [id]);

  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <Box>
        <Box
          sx={{
            component: 'h2',
            color: 'text.primary',
            fontWeight: Fonts.BOLD,
            mb: 6,
            fontSize: 16,
          }}
        >
          <IntlMessages id='sidebar.ecommerce.checkout' />
        </Box>
        <AppGridContainer>
          <Grid item xs={12} md={8}>
            <AppCard
              title={
                <Box sx={{fontSize: 16, fontWeight: Fonts.BOLD}}>
                  Order No : #{cartItems.data && cartItems.data.id}
                </Box>
              }
             
            >
              {
        cartItems.data && 
              <OrderInformation cartItems={cartItems}/>
              }
            </AppCard>

            <AppCard sx={{
              marginTop:'20px'
            }}>
            
            <OrderDetails orderId={id} />
          

            </AppCard>

          </Grid>

          <Grid item xs={12} md={4}>
            <OrderSummary cartItems={cartItems} />
            {/* <PaymentInfo /> */}
          </Grid>

        </AppGridContainer>

        
      </Box>
    </AppAnimate>
  );
};

export default ViewOrder;
