import React   from 'react';
import {Box, Button, Grid } from '@mui/material';
import IntlMessages from '@crema/utility/IntlMessages';
import {Fonts} from 'shared/constants/AppEnums';
import AppAnimate from '@crema/core/AppAnimate';
import AppGridContainer from '@crema/core/AppGridContainer';
import AppDialog from '@crema/core/AppDialog';
import PropTypes from 'prop-types';

import AddPicker from './AddItemToOrder';
import { useInfoViewActionsContext } from '@crema/utility/AppContextProvider/InfoViewContextProvider';
import { putDataApi } from '@crema/utility/APIHooks';
import { baseURL } from '@crema/services/ApiConfig';
// import { Field, Form, Formik } from 'formik';

const ApproveWarehouse = ({isOpenApproveWarehouse,onClickCloseApproveWarehous,orderId,reCallAPI}) => {

 
  // useEffect(()=>{
  //   setQueryParams({id:orderId})
  // },[orderId])

  const infoViewActionsContext = useInfoViewActionsContext();


  return (
    <AppDialog
    fullHeight={true}
    open={isOpenApproveWarehouse}
    onClose={onClickCloseApproveWarehous}
    maxWidth='lg'

    >
    <AppAnimate animation='transition.slideUpIn' delay={200} >
      <Box>
        <Box
          component='h2'
          sx={{
            color: 'text.primary',
            fontWeight: Fonts.BOLD,
            mb: 6,
            fontSize: 16,
          }}
        >
          <IntlMessages id='Order details ' />
        </Box>




         <Box>
              
          <AddPicker
          reCallAPI={reCallAPI}
          orderId={orderId}
           />
         </Box>


        
      </Box>
    </AppAnimate>
    <AppGridContainer>
    <Grid container justifyContent="flex-end" sx={{ marginTop: "10px" }}>
                  <Box>
                  <Button
                      sx={{
                        position: 'relative',
                        minWidth: 100,
                      }}
                      color='primary'
                      variant='outlined'
                      onClick={()=>{
                        putDataApi(`${baseURL}/api/order/confirmWarehouse/${orderId}`, infoViewActionsContext
                        )
                          .then(() => {
                            infoViewActionsContext.showMessage(
                              'Approve has been successfully!',
                            );
                          })
                          .catch((error) => {
                            infoViewActionsContext.fetchError(error.message);
                          });
                        reCallAPI()

                      }}
                    >
                  <IntlMessages id='Confirm' />
                  </Button>
                  </Box>
        </Grid> 
        </AppGridContainer>
 
    </AppDialog>
  );
};

export default ApproveWarehouse;
ApproveWarehouse.propTypes = {
    onClickCloseApproveWarehous: PropTypes.func,
  reCallAPI: PropTypes.func,
  isOpenApproveWarehouse: PropTypes.bool,
  orderId: PropTypes.number,
};
