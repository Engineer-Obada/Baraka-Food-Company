import React, { useState} from 'react';
import OrderTable from './OrderTable';
import AppsContainer from '@crema/core/AppsContainer';
import {useIntl} from 'react-intl';
import AppsHeader from '@crema/core/AppsContainer/AppsHeader';
import AppsContent from '@crema/core/AppsContainer/AppsContent';
import Box from '@mui/material/Box';
import AppInfoView from '@crema/core/AppInfoView';
import AppSearchBar from '@crema/core/AppSearchBar';
import {postDataApi, useGetDataApi} from '@crema/utility/APIHooks';
import OrderDetails from './OrderDetaills';
import RejectOrder from './RejectOrder';
import { baseURL } from '@crema/services/ApiConfig';
import { useInfoViewActionsContext } from '@crema/utility/AppContextProvider/InfoViewContextProvider';

const orders = () => {
  const {messages} = useIntl();
  const [{apiData:OrderData}, {reCallAPI}] = useGetDataApi('/api/order/showAll');

  const[orderId, setOrderId] = useState(1);

  const[orderIdReject, setOrderIdReject] = useState(1);
  

  const infoViewActionsContext = useInfoViewActionsContext();


 

  /*******************************/
  const[isOpenEdit , setOpenEdit] = useState(false);

  const onClickOpenEdit = (id)=>{
    setOpenEdit(true)
    setOrderId(id)
    
  }
  const onClickCloseEdit = ()=>{
    setOpenEdit(false)
  }

  const[isOpenReject , setOpenReject] = useState(false);

  const onClickOpenReject = (id)=>{
    setOpenReject(true)
    setOrderIdReject(id)
    
  }
  const onClickCloseReject = ()=>{
    setOpenReject(false)
  }


  const onDeleteOrder = (orderId)=>{
    const selectId = orderId;
    postDataApi(`${baseURL}/api/order/delete/`,infoViewActionsContext,
      selectId
    ).then(()=>{
      reCallAPI();
      infoViewActionsContext.showMessage('Order Deleted Successfully');
    }).catch((error) => {
      infoViewActionsContext.fetchError(error.message);
    });
  }
  return (
    <>
      <AppsContainer title={messages['eCommerce.recentOrders']} fullView>
        <AppsHeader>
          <Box
            display='flex'
            flexDirection='row'
            alignItems='center'
            width={1}
            justifyContent='space-between'
          >
            <AppSearchBar
              iconPosition='right'
              overlap={false}
              placeholder={messages['common.searchHere']}
            />
          </Box>
        </AppsHeader>

        <AppsContent
          sx={{
            paddingTop: 2.5,
            paddingBottom: 2.5,
          }}
        >

          <OrderTable 
          orderData={OrderData}
          onClickOpenEdit={onClickOpenEdit}
          onClickCloseEdit={onClickCloseEdit}
          onClickOpenReject={onClickOpenReject}
          onDeleteOrder={onDeleteOrder}
          />

        </AppsContent>

        <OrderDetails 
        orderId={orderId}
        isOpenEdit={isOpenEdit}
        onClickCloseEdit={onClickCloseEdit}

        />



        <RejectOrder
         orderIdReject={orderIdReject}
         isOpenReject={isOpenReject}
         onClickCloseReject={onClickCloseReject}
        />

       
      






      </AppsContainer>
      <AppInfoView />
    </>
  );
};

export default orders;
