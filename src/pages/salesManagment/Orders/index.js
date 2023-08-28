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
import ApproveOrder from './ApproveOrder';
import ApproveSales from './ApproveOrder/ApproveSale/ApproveSales';
import ApproveWarehouse from './ApproveOrder/ApproveWarehouse/ApproveWarehouse';
import ApproveWarehousefinal from './ApproveOrder/ApproveWarehousefinal/ApproveWarehousefinal';

const orders = () => {
  const {messages} = useIntl();
  const [{apiData:OrderData}, {reCallAPI}] = useGetDataApi(`${baseURL}/api/order/showAll`);
console.log('dddddddddd',OrderData);
  const[orderId, setOrderId] = useState();

  const[orderIdReject, setOrderIdReject] = useState();

  const[orderIdApprove, setOrderIdApprovet] = useState();

  const[orderIdApproveSale, setOrderIdApprovetSale] = useState();

  const[orderIdApproveWarehouse, setOrderIdApprovetWarehouse] = useState();
  const[orderIdApproveWarehousefinal, setOrderIdApprovetWarehousefinal] = useState();
  

  const infoViewActionsContext = useInfoViewActionsContext();


 

  /*******************************/
  const[isOpenEdit , setOpenEdit] = useState(false);

  const onClickOpenEdit = (id)=>{
    setOpenEdit(true)
    setOrderId(id)
    console.log('fd',id);
    
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
  const[isOpenApprove , setOpenApprove] = useState(false);

  const[isOpenApproveSale , setOpenApproveSale] = useState(false);

  const[isOpenApproveWarehouse , setOpenApproveWarehous] = useState(false);
  const[isOpenApproveWarehousefinal , setOpenApproveWarehousfinal] = useState(false);

  const onClickOpenApprov = (id)=>{

    setOpenApprove(true)
    setOrderIdApprovet(id)
    
  }
  // *********************************************
  const onClickOpenApprovSale = (id)=>{
 
    setOpenApproveSale(true)
    setOrderIdApprovetSale(id)
    
  }
  const onClickCloseApproveSale = ()=>{
    setOpenApproveSale(false)
  }
  // ****************************************
  // *********************************************
  const onClickOpenApprovWarehous = (id)=>{
console.log('q',id);
    setOpenApproveWarehous(true)
    setOrderIdApprovetWarehouse(id)
    
  }
  const onClickOpenApprovWarehousfinal = (id)=>{
console.log('q',id);
    setOpenApproveWarehousfinal(true)
    setOrderIdApprovetWarehousefinal(id)
    
  }
  const onClickCloseApproveWarehous = ()=>{
    setOpenApproveWarehous(false)
  }
  const onClickCloseApproveWarehousfinal = ()=>{
    setOpenApproveWarehousfinal(false)
  }
  // ****************************************
  const onClickCloseApprove = ()=>{
    setOpenApprove(false)
  }


  const onDeleteOrder = (orderId)=>{
    postDataApi(`${baseURL}/api/order/delete/${orderId}`,infoViewActionsContext
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
          onClickOpenApprove={onClickOpenApprov}
          onClickCloseApprove={onClickCloseApprove}
          onClickOpenApprovSale={onClickOpenApprovSale}
          onClickCloseApproveSale={onClickCloseApproveSale}
          onClickOpenApprovWarehous={onClickOpenApprovWarehous}
          onClickOpenApprovWarehousfinal={onClickOpenApprovWarehousfinal}
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
         reCallAPI={reCallAPI}
        />

        <ApproveOrder
        reCallAPI={reCallAPI}
        orderId={orderIdApprove} 
        isOpenApprove={isOpenApprove}
        onClickCloseApprove={onClickCloseApprove}
        />

        <ApproveSales
        reCallAPI={reCallAPI}
        orderId={orderIdApproveSale} 
        isOpenApproveSale={isOpenApproveSale}
        onClickCloseApproveSale={  onClickCloseApproveSale }
        />

        <ApproveWarehouse
        reCallAPI={reCallAPI}
        orderId={orderIdApproveWarehouse} 
        isOpenApproveWarehouse={isOpenApproveWarehouse}
        onClickCloseApproveWarehous={  onClickCloseApproveWarehous }
        />
        <ApproveWarehousefinal
        reCallAPI={reCallAPI}
        orderId={orderIdApproveWarehousefinal} 
        isOpenApproveWarehousefinal={isOpenApproveWarehousefinal}
        onClickCloseApproveWarehousfinal={  onClickCloseApproveWarehousfinal }
        />



       
      






      </AppsContainer>
      <AppInfoView />
    </>
  );
};

export default orders;
