import React, { useState } from 'react'
import AppsContainer from '@crema/core/AppsContainer';
import Products from './Products';
import { postDataApi, useGetDataApi } from '@crema/utility/APIHooks';
import { baseURL } from '@crema/services/ApiConfig';
import { useInfoViewActionsContext } from '@crema/utility/AppContextProvider/InfoViewContextProvider';

export default function product() {
  
  const [isAddProductOpen, setAddProductkOpen] = React.useState(false);
  const [{apiData:ProductData},{reCallAPI}] = useGetDataApi(`${baseURL}/api/product`);
  const [productSlected, setProductSelected] = useState(null);
  const infoViewActionsContext = useInfoViewActionsContext();
  

  const onOpenAddProduct = () => {
    setAddProductkOpen(true);
  };
  const onOpenEditProduct = (row)=>{

    setAddProductkOpen(true);
    setProductSelected(row)
  }

  const onCloseAddProduct = () => {
    setAddProductkOpen(false);
  };
   
  const onChangeStatus = (status, contact) => {
    const selectedIdList = [contact.id];
    const id = selectedIdList[0]
    console.log('status',status);
    console.log('id',id  );
    postDataApi(`${baseURL}/api/product/availableProduct/${selectedIdList}`,infoViewActionsContext, {
      available:status,
    }).then(() => {
      reCallAPI();
      infoViewActionsContext.showMessage(
          'status updated Successfully'
      );
    })
    .catch((error) => {
      infoViewActionsContext.fetchError(error.message);
    });
  }
  
  return (
     <AppsContainer> 
    <Products 
    onChangeStatus={onChangeStatus}
    productSlected={productSlected}
    onCloseAddProduct={onCloseAddProduct} 
    onOpenAddProduct={onOpenAddProduct}
    onOpenEditProduct={onOpenEditProduct}
    isAddProductOpen={isAddProductOpen} productsTableData={ProductData}
    reCallAPI={reCallAPI}
    />
    </AppsContainer>

  )
}
