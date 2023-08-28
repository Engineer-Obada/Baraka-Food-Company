import React  from 'react';
import AppsContainer from '@crema/core/AppsContainer';
import {useIntl} from 'react-intl';
import AppsHeader from '@crema/core/AppsContainer/AppsHeader';
import AppsContent from '@crema/core/AppsContainer/AppsContent';
import Box from '@mui/material/Box';
import AppInfoView from '@crema/core/AppInfoView';
import AppSearchBar from '@crema/core/AppSearchBar';

import PickerTable from './PickerTable';

import PropTypes from 'prop-types';

const Pickerjob = ({PickerData}) => {
  const {messages} = useIntl();
  // const [{apiData:PickersData}, {reCallAPI}] = useGetDataApi(`${baseURL}/api/order/pickerOrders`);
  




  /*******************************/
  


  return (
    <>
      <AppsContainer  fullView>
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

          <PickerTable 
          PickerData={PickerData}
          />

        </AppsContent>

    

      </AppsContainer>
      <AppInfoView />
    </>
  );
};

export default Pickerjob;
Pickerjob.propTypes = {
  PickerData: PropTypes.object.isRequired,

};
