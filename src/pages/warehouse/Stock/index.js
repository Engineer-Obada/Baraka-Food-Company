import React, {useEffect} from 'react';
import StockTable from './StockTable';
import AppsContainer from '@crema/core/AppsContainer';
import {useIntl} from 'react-intl';
import AppsHeader from '@crema/core/AppsContainer/AppsHeader';
import AppsContent from '@crema/core/AppsContainer/AppsContent';
import Box from '@mui/material/Box';
import AppInfoView from '@crema/core/AppInfoView';
import AppSearchBar from '@crema/core/AppSearchBar';
import {useGetDataApi} from '@crema/utility/APIHooks';
import { useParams } from 'react-router-dom';
import { baseURL } from '@crema/services/ApiConfig';

const Stock = () => {
  const {messages} = useIntl();

  const {id} = useParams();
  const [{apiData: StockData}, {setQueryParams}] =
    useGetDataApi(`${baseURL}/api/stock/view/${id}`);

  useEffect(() => {
    setQueryParams({id: id});
  }, [id]);




  return (
    <>
      <AppsContainer title={'Name Warehouse'} fullView>
        <AppsHeader>
          {console.log('id',id)}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              width: 1,
            }}
          >
            <AppSearchBar
              iconPosition='right'
              overlap={false}
              placeholder={messages['common.searchHere']}
            />
           
          </Box>
        </AppsHeader>

       
        
   {
    StockData ? (
      <AppsContent
            sx={{
              paddingTop: 2.5,
              paddingBottom: 2.5,
            }}
          >
            <StockTable product={StockData} />
          </AppsContent>
    ):null
   }
    {/* {console.log('StockData',StockData.data[0])} */}
          
        
         
       
      </AppsContainer>

      <AppInfoView />
    </>
  );
};

export default Stock;
