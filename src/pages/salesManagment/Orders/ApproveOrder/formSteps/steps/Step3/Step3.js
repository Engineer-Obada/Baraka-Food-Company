import { Box, Step } from "@mui/material";
import PropTypes from 'prop-types';
import OrderDetails from ".";

export function Step3({orderId}) {
    return (
      <div>

         <Step label="More info">
          <Box paddingBottom={2}>
            <OrderDetails orderId={orderId}/>
          </Box>
        </Step>
        </div>
    );
  }
  Step3.propTypes = {
    orderId: PropTypes.number,
   
  };
  