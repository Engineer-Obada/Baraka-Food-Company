import React, { useEffect }   from 'react';
import {Box, } from '@mui/material';

import AppAnimate from '@crema/core/AppAnimate';
import {useGetDataApi} from '@crema/utility/APIHooks';
// import PaymentInfo from './PaymentInfo';
import { baseURL } from '@crema/services/ApiConfig';
import { useParams } from 'react-router-dom';
import Invoice2 from './Invoice2';
// import { baseURL } from '@crema/services/ApiConfig';

const ViewInvoice = () => {
  const {id} = useParams();
  const [{apiData: cartItems},{setQueryParams}] = useGetDataApi(`${baseURL}/api/invoice/viewInvoice/${id}`, []); /*api/order/view/:id*/
  useEffect(() => {

    setQueryParams({id: id});
  }, [id]);

  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <Box>
      {cartItems.data && (
        <Invoice2 cartItems={cartItems} />
      ) 
      }        
      </Box>
    </AppAnimate>
  );
};

export default ViewInvoice;
