import AppGridContainer from '@crema/core/AppGridContainer';
import { Box, Grid } from '@mui/material';
import React from 'react';

const DeliveryAddress = () => {
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
            <span>Sat May 13 2023</span>
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
            <span>ABC Warehouse</span>
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
            <span>Cash</span>
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
            <span>Obada</span>
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
            <span>obada.s.alsayed@gmail.com</span>
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
            <span>+96358212292</span>
          </Box>
        </Grid>
       

      </AppGridContainer>
    </Box>
  );
};

export default DeliveryAddress;
