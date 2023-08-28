import AppGridContainer from '@crema/core/AppGridContainer';
import { baseURL } from '@crema/services/ApiConfig';
import {  putDataApi, useGetDataApi } from '@crema/utility/APIHooks';
import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { useInfoViewActionsContext } from '@crema/utility/AppContextProvider/InfoViewContextProvider';
import IntlMessages from '@crema/utility/IntlMessages';

const ApproveCreidit = ({orderId,reCallAPI}) => {
  const [{apiData: cartItems}] = useGetDataApi(`${baseURL}/api/order/view/${orderId}`, []); /*api/order/view/:id*/
  const timestamp = cartItems.data &&  cartItems.data[0].orderCreated;
  const date = new Date(timestamp);
  const localDateString = date.toLocaleDateString();
  const infoViewActionsContext = useInfoViewActionsContext();

  return (

    <Box 
    sx={{
      paddingBottom:"10px"
    }}
    >
    
      <AppGridContainer
      
      >

        <Grid item md={4}>
          <Box 
          sx={{
            // backgroundColor:'red'
            display:'flex',
            flexDirection:'column',
            
          }}
          >
            <h5
            style={{
              fontWeight:'bolder'
              }}
            >Order Created at</h5><br></br>
            <span>{localDateString}</span>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box 
          sx={{
            // backgroundColor:'red'
            display:'flex',
            flexDirection:'column',
            
          }}
          >
            <h5 
            style={{
              fontWeight:'bolder'
              }}
            >Warehouse Name</h5><br></br>
            <span>{cartItems.data && cartItems.data[0].warehouseName}</span>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box 
          sx={{
            // backgroundColor:'red'
            display:'flex',
            flexDirection:'column',
            
          }}
          >
            <h5
            style={{
              fontWeight:'bolder'
              }}
            >Pyment Methods</h5><br></br>
            <span>{cartItems.data && cartItems.data[0].pymentMethods}</span>
          </Box>
        </Grid>
       

      </AppGridContainer>
      <AppGridContainer sx={{
        marginTop:"30px"
      }}>
 
        <Grid item md={4}>
          <Box 
          sx={{
            // backgroundColor:'red'
            display:'flex',
            flexDirection:'column',
            
          }}
          >
            <h5
            style={{
              fontWeight:'bolder'
              }}
            >Name Customer </h5><br></br>
            <span>{cartItems.data && cartItems.data[0].namefirst}</span>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box 
          sx={{
            // backgroundColor:'red'
            display:'flex',
            flexDirection:'column',
            
          }}
          >
            <h5 style={{
            fontWeight:'bolder'
            }}>Email</h5><br></br>
            <span>{cartItems.data && cartItems.data[0].email}</span>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box 
          sx={{
            // backgroundColor:'red'
            display:'flex',
            flexDirection:'column',
            
          }}
          >
            <h5 style={{
            fontWeight:'bolder'
            }}>Phone No</h5><br></br>
            <span>{cartItems.data && cartItems.data[0].phoneNumber}</span>
          </Box>
        </Grid>
       
       
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
                        putDataApi(`${baseURL}/api/order/confirmCredit/${orderId}`, infoViewActionsContext
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
    </Box>
  );
};

export default ApproveCreidit;
ApproveCreidit.propTypes = {
  orderId: PropTypes.number,
  reCallAPI: PropTypes.func,
 
};