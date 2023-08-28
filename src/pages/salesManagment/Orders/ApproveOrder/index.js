import AppDialog from '@crema/core/AppDialog'
import React from 'react'
import PropTypes from 'prop-types';
// import { FormSteps } from './formSteps/FormSteps';
import ApproveCreidit from './ApporveCedit/ApproveCreidit';

function ApproveOrder(props) {

    const {isOpenApprove,onClickCloseApprove,orderId,reCallAPI} = props
        return(
            <AppDialog
           maxWidth='lg'
            open={isOpenApprove}
            onClose={onClickCloseApprove}
            title="Order Approve"
            padd={5}
            radius={2}
            >
{/* 
            <FormSteps
         
            orderId={orderId}
            /> */}

            <ApproveCreidit orderId={orderId} reCallAPI={reCallAPI}/>
            </AppDialog>
        )
    }
   
  


export default ApproveOrder

ApproveOrder.propTypes = {
    isOpenApprove: PropTypes.number,
    orderId: PropTypes.number,
    onClickCloseApprove: PropTypes.func,
    reCallAPI: PropTypes.func
   
  };
  