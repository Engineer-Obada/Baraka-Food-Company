import React, { useState } from 'react';
import { deleteDataApi, postDataApi, useGetDataApi } from '@crema/utility/APIHooks';
import CustomerTable from './CustomerView/ProductsTable';
import AppsContainer from '@crema/core/AppsContainer';
import LinkCustomer from './LinkCustomer';
import RejectCustomer from './RejectCustomer';
import { useInfoViewActionsContext } from '@crema/utility/AppContextProvider/InfoViewContextProvider';
import { baseURL } from '@crema/services/ApiConfig';


const customer = () => {
  const [{apiData:CustomerData},{reCallAPI}] = useGetDataApi(`${baseURL}/api/customer/showAll`);

  const [isLinkOpen, setLinkOpen] = useState(false);
  const [isRejectOpen, setRejectOpen] = useState(false);
  const [customerSelected, setCustomerSelected] = useState(null);
  const [customerSelectedReject, setCustomerSelectedReject] = useState(null);
  const infoViewActionsContext = useInfoViewActionsContext();

  const handelOpenClick = (row)=>{
    setLinkOpen(true)
    setCustomerSelected(row)
  }
  const handelOpenRejectClick = (row)=>{
    setRejectOpen(true)
    setCustomerSelectedReject(row)
  }

  const onCloseRejectCustomer = ()=>{
    setRejectOpen(false)
  }
  const onCloseLinkCustomer = ()=>{
    setLinkOpen(false)
  }





  const onDeleteCustomer = (productId)=>{
    const selectId = productId;
    deleteDataApi(`${baseURL}/api/customer/Delete/${selectId}`,infoViewActionsContext
    ).then(()=>{
      reCallAPI();
      infoViewActionsContext.showMessage('Customer Deleted Successfully');
    }).catch((error) => {
      infoViewActionsContext.fetchError(error.message);
    });
  }

  const onUpdateStatusCustomer = (status, contact) => {
    const selectedIdList = [contact.id];
    postDataApi(`${baseURL}/api/customer/accountAvailable/${selectedIdList}`,infoViewActionsContext, {
      accountStatus: status,
    }).then(() => {
      reCallAPI();
      infoViewActionsContext.showMessage(
          'Customer Status Updated Successfully'
      );
    })
    .catch((error) => {
      infoViewActionsContext.fetchError(error.message);
    });
  }


  
  return (
    <AppsContainer
    title={"B2B Customer"}
    >

    <CustomerTable
    handelOpenClick={handelOpenClick}
    handelOpenRejectClick={handelOpenRejectClick}
    CustomerData={CustomerData}
     onDeleteCustomer={onDeleteCustomer}
     onUpdateStatusCustomer={onUpdateStatusCustomer}
    />
    <LinkCustomer 
    customerSelected={customerSelected}
    isLinkOpen={isLinkOpen} 
    onCloseLinkCustomer={onCloseLinkCustomer}
    reCallAPI={reCallAPI}
    />
    <RejectCustomer 
    customerSelectedReject={customerSelectedReject}
    isRejectOpen={isRejectOpen} 
    onCloseRejectCustomer={onCloseRejectCustomer}
    reCallAPI={reCallAPI}
    />



  </AppsContainer>
  );
};

export default customer;




