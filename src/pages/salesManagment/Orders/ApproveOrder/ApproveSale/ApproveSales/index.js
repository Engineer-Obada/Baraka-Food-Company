import React, {  useState }  from 'react';
import {Box, Button, Grid} from '@mui/material';
import AppCard from '@crema/core/AppCard';
import IntlMessages from '@crema/utility/IntlMessages';
import {Fonts} from 'shared/constants/AppEnums';
import AppAnimate from '@crema/core/AppAnimate';
import AppGridContainer from '@crema/core/AppGridContainer';
import AppDialog from '@crema/core/AppDialog';
import PropTypes from 'prop-types';
import OrderDetailsTable from './OrderDetailsTable';
import AddItem from './OrderDetailsTable/AddItemToOrder';
import SendNote from './OrderDetailsTable/SendNote';
import { useInfoViewActionsContext } from '@crema/utility/AppContextProvider/InfoViewContextProvider';
import {  putDataApi  } from '@crema/utility/APIHooks';
import { baseURL } from '@crema/services/ApiConfig';

const OrderDetails = ({isOpenApproveSale,onClickCloseApproveSale,orderId,reCallAPI}) => {

 
  // useEffect(()=>{
  //   setQueryParams({id:orderId})
  // },[orderId])

  const infoViewActionsContext = useInfoViewActionsContext();
  const[orderIdNote, setOderIdNote] = useState();
  const[productIdNote, setproductNote] = useState();

  const[isOpenNote , setOpenNote] = useState(false);

  const onClickOpenNote = (productId,orderId)=>{
    setOpenNote(true)
    setOderIdNote(orderId);
    setproductNote(productId);

  }
  const onClickCloseNote = ()=>{
    setOpenNote(false)
  }
  
  return (
    <AppDialog
    fullHeight={true}
    open={isOpenApproveSale}
    onClose={onClickCloseApproveSale}
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
              
          <AddItem
          reCallAPI={reCallAPI}
          orderId={orderId}
           />
         </Box>


        <AppGridContainer>


          <Grid item xs={12} md={12}>
            <AppCard
              contentStyle={{px: 0}}
              footer={
                <Box
                  sx={{
                    mt: 4,
                    width: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                
                </Box>
              }
            >
                  <OrderDetailsTable
                  onClickOpenNote={onClickOpenNote}
                  orderId={orderId}
                  reCallAPI={reCallAPI}
              />
             
            </AppCard>


          </Grid>
        
        </AppGridContainer>
      </Box>
    </AppAnimate>

    <SendNote
    orderId
      onClickCloseNote={onClickCloseNote}
      isOpenNote={isOpenNote} 
      orderIdNote={orderIdNote}
      productIdNote={productIdNote}
      />


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
                        putDataApi(`${baseURL}/api/order/confirmSalesManager/${orderId}`, infoViewActionsContext
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
    </AppDialog>
  );
};

export default OrderDetails;
OrderDetails.propTypes = {
  onClickCloseApproveSale: PropTypes.func,
  reCallAPI: PropTypes.func,
  isOpenApproveSale: PropTypes.bool,
  orderId: PropTypes.number,
};
