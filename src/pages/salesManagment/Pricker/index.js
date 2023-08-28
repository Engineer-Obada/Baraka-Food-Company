import React, { useState } from 'react';
import AppsContainer from '@crema/core/AppsContainer';
import {useIntl} from 'react-intl';
import AppsHeader from '@crema/core/AppsContainer/AppsHeader';
import AppsContent from '@crema/core/AppsContainer/AppsContent';
import Box from '@mui/material/Box';
import AppInfoView from '@crema/core/AppInfoView';
import AppSearchBar from '@crema/core/AppSearchBar';
import {postDataApi, useGetDataApi} from '@crema/utility/APIHooks';
import { baseURL } from '@crema/services/ApiConfig';
import { useInfoViewActionsContext } from '@crema/utility/AppContextProvider/InfoViewContextProvider';
import PickerTable from './PickerTable';
import IntlMessages from '@crema/utility/IntlMessages';
import AddIcon from '@mui/icons-material/Add';
import { Button, Zoom } from '@mui/material';
import AddNewPicker from './AddPicker';

const picker = () => {
  const {messages} = useIntl();
  const [{apiData:PickersData}, {reCallAPI}] = useGetDataApi(`${baseURL}/api/order/pickerOrders`);
  

  const infoViewActionsContext = useInfoViewActionsContext();

const [isaddPicker, serOpenAddPicker] = useState(false);
 const onOpenAddPicker = () => {
  serOpenAddPicker(true);
  };
 const onCloseAddPicker = () => {
  serOpenAddPicker(false);
  };
 

  /*******************************/
  


  const onDeleteOrder = (orderId)=>{
    postDataApi(`${baseURL}/api/order/delete/`,infoViewActionsContext,
    orderId
    ).then(()=>{
      reCallAPI();
      infoViewActionsContext.showMessage('Order Deleted Successfully');
    }).catch((error) => {
      infoViewActionsContext.fetchError(error.message);
    });
  }
  return (
    <>
      <AppsContainer title={'Picker Jobs'} fullView>
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
          <Box sx={{width:'200px'}} >
        <Zoom in style={{transitionDelay: '300ms'}}>
          <Button
            variant='outlined'
            color='primary'
            startIcon={<AddIcon />}
            onClick={onOpenAddPicker}
          >
            <IntlMessages id='Add new Picker' />
          </Button>
        </Zoom>
      </Box>
        </AppsHeader>

        <AppsContent
          sx={{
            paddingTop: 2.5,
            paddingBottom: 2.5,
          }}
        >

          <PickerTable 
          PickersData={PickersData}
          onDeleteOrder={onDeleteOrder}
          />

        </AppsContent>

      <AddNewPicker
      
          isaddPicker={isaddPicker}
          onCloseAddPicker={onCloseAddPicker}
      
      />

      </AppsContainer>
      <AppInfoView />
    </>
  );
};

export default picker;
