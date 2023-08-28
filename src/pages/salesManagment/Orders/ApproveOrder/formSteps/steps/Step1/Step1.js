import { Step } from "@mui/material";
import ApproveCreidit from "../../../ApporveCedit/ApproveCreidit";
import PropTypes from 'prop-types';

export function Step1({orderId}) {
    return (
      <div>
        <Step label="Personal data"
        
        >
          
          <ApproveCreidit orderId={orderId}/>
        </Step>
        </div>
    );
  }
  Step1.propTypes = {
    orderId: PropTypes.number,
   
  };
  