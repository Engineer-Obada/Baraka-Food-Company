import React, {  useState }  from 'react';
import {Box, Grid} from '@mui/material';
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

const OrderDetails = ({isOpenEdit,onClickCloseEdit,orderId,reCallAPI}) => {

 
  // useEffect(()=>{
  //   setQueryParams({id:orderId})
  // },[orderId])



  const[isOpenNote , setOpenNote] = useState(false);

  const onClickOpenNote = ()=>{
    setOpenNote(true)
    
  }
  const onClickCloseNote = ()=>{
    setOpenNote(false)
  }
  
  return (
    <AppDialog
    fullHeight={true}
    open={isOpenEdit}
    onClose={onClickCloseEdit}
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
      isOpenNote={isOpenNote} />


            
    </AppDialog>
  );
};

export default OrderDetails;
OrderDetails.propTypes = {
  onClickCloseEdit: PropTypes.func,
  reCallAPI: PropTypes.func,
  isOpenEdit: PropTypes.bool,
  orderId: PropTypes.number,
};
