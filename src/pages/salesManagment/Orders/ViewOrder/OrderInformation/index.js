import AppGridContainer from '@crema/core/AppGridContainer';
import { Box, Grid } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const DeliveryAddress = ({cartItems}) => {
  const timestamp = cartItems.data[0].orderCreated;
  const date = new Date(timestamp);
  const localDateString = date.toLocaleDateString();

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
            <span>{cartItems.data[0].warehouseName}</span>
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
            <span>{cartItems.data[0].pymentMethods}</span>
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
            <span>{cartItems.data[0].namefirst}</span>
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
            <span>{cartItems.data[0].email}</span>
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
            <span>{cartItems.data[0].phoneNumber}</span>
          </Box>
        </Grid>
       

      </AppGridContainer>
    </Box>
  );
};

export default DeliveryAddress;
DeliveryAddress.propTypes = {
  cartItems: PropTypes.object.isRequired,
  
};
